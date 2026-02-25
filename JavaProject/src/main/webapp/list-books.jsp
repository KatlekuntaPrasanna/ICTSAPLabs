<%@ page import="java.util.List" %>
<%@ page import="com.library.model.Book" %>

<!DOCTYPE html>
<html>
<head>
    <title>Book List</title>
</head>
<body>
    <h2>📖 Book List</h2>

    <table border="1">
        <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Price</th>
            <th>Actions</th>
        </tr>

        <%
            List<Book> books = (List<Book>) request.getAttribute("listBooks");
            if (books != null) {
                for (Book book : books) {
        %>
        <tr>
            <td><%= book.getId() %></td>
            <td><%= book.getTitle() %></td>
            <td><%= book.getAuthor() %></td>
            <td><%= book.getPrice() %></td>
            <td>
                <a href="BookServlet?action=edit&id=<%= book.getId() %>">Edit</a> |
                <a href="BookServlet?action=delete&id=<%= book.getId() %>"
                   onclick="return confirm('Are you sure?')">Delete</a>
            </td>
        </tr>
        <%
                }
            }
        %>
    </table>

    <br>
    <a href="index.jsp">Back</a>
</body>
</html>
