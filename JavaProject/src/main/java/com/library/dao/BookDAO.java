package com.library.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import com.library.model.Book;

public class BookDAO {

    private String jdbcURL = "jdbc:mysql://localhost:3306/librarydb";
    private String jdbcUsername = "root";
    private String jdbcPassword = "Prasanna@5n1";

    // INSERT BOOK
    public void insertBook(Book book) throws Exception {

        Class.forName("com.mysql.cj.jdbc.Driver");
        Connection connection = DriverManager.getConnection(jdbcURL, jdbcUsername, jdbcPassword);

        String sql = "INSERT INTO books (title, author, price) VALUES (?, ?, ?)";
        PreparedStatement statement = connection.prepareStatement(sql);

        statement.setString(1, book.getTitle());
        statement.setString(2, book.getAuthor());
        statement.setDouble(3, book.getPrice());

        statement.executeUpdate();

        connection.close();
    }

 // DELETE BOOK
    public void deleteBook(int id) throws Exception {

        Class.forName("com.mysql.cj.jdbc.Driver");
        Connection connection = DriverManager.getConnection(jdbcURL, jdbcUsername, jdbcPassword);

        String sql = "DELETE FROM books WHERE id = ?";
        PreparedStatement statement = connection.prepareStatement(sql);
        statement.setInt(1, id);

        statement.executeUpdate();
        connection.close();
    }

 // UPDATE BOOK
    public void updateBook(Book book) throws Exception {

        Class.forName("com.mysql.cj.jdbc.Driver");
        Connection connection = DriverManager.getConnection(jdbcURL, jdbcUsername, jdbcPassword);

        String sql = "UPDATE books SET title=?, author=?, price=? WHERE id=?";
        PreparedStatement statement = connection.prepareStatement(sql);

        statement.setString(1, book.getTitle());
        statement.setString(2, book.getAuthor());
        statement.setDouble(3, book.getPrice());
        statement.setInt(4, book.getId());

        statement.executeUpdate();
        connection.close();
    }

    public Book selectBook(int id) throws Exception {

        Book book = null;

        Class.forName("com.mysql.cj.jdbc.Driver");
        Connection connection = DriverManager.getConnection(jdbcURL, jdbcUsername, jdbcPassword);

        String sql = "SELECT * FROM books WHERE id = ?";
        PreparedStatement ps = connection.prepareStatement(sql);
        ps.setInt(1, id);

        ResultSet rs = ps.executeQuery();

        if (rs.next()) {
            String title = rs.getString("title");
            String author = rs.getString("author");
            double price = rs.getDouble("price");

            book = new Book(id, title, author, price);
        }

        connection.close();

        return book;
    }

    // SELECT ALL BOOKS
    public List<Book> selectAllBooks() throws Exception {

        List<Book> books = new ArrayList<>();

        Class.forName("com.mysql.cj.jdbc.Driver");
        Connection connection = DriverManager.getConnection(jdbcURL, jdbcUsername, jdbcPassword);

        String sql = "SELECT * FROM books";
        PreparedStatement statement = connection.prepareStatement(sql);
        ResultSet rs = statement.executeQuery();

        while (rs.next()) {
            int id = rs.getInt("id");
            String title = rs.getString("title");
            String author = rs.getString("author");
            double price = rs.getDouble("price");

            books.add(new Book(id, title, author, price));
        }

        connection.close();

        return books;
    }
}
