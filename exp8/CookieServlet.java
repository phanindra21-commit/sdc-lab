import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class CookieServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException {

        response.setContentType("text/html");

        String username = request.getParameter("username");

        Cookie cookie = new Cookie("user", username);
        response.addCookie(cookie);

        PrintWriter out = response.getWriter();
        out.println("<h3>Cookie stored successfully</h3>");
        out.println("Username: " + username);
    }
}