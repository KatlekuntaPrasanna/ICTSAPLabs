package com.library.controller;

import com.library.dao.BookDAO;
import com.library.model.Book;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.*;

import java.io.IOException;
import java.util.List;

@WebServlet("/BookServlet")
public class BookServlet extends HttpServlet {

    private BookDAO bookDAO;

    @Override
    public void init() {
        bookDAO = new BookDAO();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        String action = request.getParameter("action");

        try {
            if (action == null) {
                action = "list";
            }

            switch (action) {
                case "list":
                    listBooks(request, response);
                    break;
                case "delete":
                    deleteBook(request, response);
                    break;
                case "edit":
                    showEditForm(request, response);
                    break;
                default:
                    listBooks(request, response);
                    break;
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        String action = request.getParameter("action");

        try {
            if ("insert".equals(action)) {
                insertBook(request, response);
            } else if ("update".equals(action)) {
                updateBook(request, response);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // INSERT
    private void insertBook(HttpServletRequest request, HttpServletResponse response)
            throws Exception {

        String title = request.getParameter("title");
        String author = request.getParameter("author");
        double price = Double.parseDouble(request.getParameter("price"));

        Book newBook = new Book(title, author, price);
        bookDAO.insertBook(newBook);

        response.sendRedirect("BookServlet?action=list");
    }

    // UPDATE
    private void updateBook(HttpServletRequest request, HttpServletResponse response)
            throws Exception {

        int id = Integer.parseInt(request.getParameter("id"));
        String title = request.getParameter("title");
        String author = request.getParameter("author");
        double price = Double.parseDouble(request.getParameter("price"));

        Book book = new Book(id, title, author, price);
        bookDAO.updateBook(book);

        response.sendRedirect("BookServlet?action=list");
    }

    // DELETE
    private void deleteBook(HttpServletRequest request, HttpServletResponse response)
            throws Exception {

        int id = Integer.parseInt(request.getParameter("id"));
        bookDAO.deleteBook(id);

        response.sendRedirect("BookServlet?action=list");
    }

    // SHOW EDIT FORM
    private void showEditForm(HttpServletRequest request, HttpServletResponse response)
            throws Exception {

        int id = Integer.parseInt(request.getParameter("id"));
        Book existingBook = bookDAO.selectBook(id);

        request.setAttribute("book", existingBook);
        request.getRequestDispatcher("book-form.jsp").forward(request, response);
    }

    // LIST
    private void listBooks(HttpServletRequest request, HttpServletResponse response)
            throws Exception {

        List<Book> listBooks = bookDAO.selectAllBooks();
        request.setAttribute("listBooks", listBooks);
        request.getRequestDispatcher("list-books.jsp").forward(request, response);
    }
}
