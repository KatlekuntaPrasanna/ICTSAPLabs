<%@ page import="com.library.model.Book" %>

<%
    Book book = (Book) request.getAttribute("book");
%>

<!DOCTYPE html>
<html>
<head>
    <title>Edit Book</title>
</head>
<body>

<h2>Edit Book</h2>

<form action="BookServlet" method="post">
    <input type="hidden" name="action" value="update">
    <input type="hidden" name="id" value="<%= book.getId() %>">

    Title:
    <input type="text" name="title" value="<%= book.getTitle() %>" required>
    <br><br>

    Author:
    <input type="text" name="author" value="<%= book.getAuthor() %>" required>
    <br><br>

    Price:
    <input type="number" step="0.01" name="price" value="<%= book.getPrice() %>" required>
    <br><br>

    <input type="submit" value="Update Book">
</form>

<br>
<a href="BookServlet?action=list">Back</a>

</body>
</html>
