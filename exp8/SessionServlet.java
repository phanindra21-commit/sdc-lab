import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class SessionServlet extends HttpServlet {

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException {

        response.setContentType("text/html");

        String username = request.getParameter("username");

        HttpSession session = request.getSession();
        session.setAttribute("username", username);

        PrintWriter out = response.getWriter();

        out.println("<h3>Session created successfully</h3>");
        out.println("Username stored in session: " + username);
    }
}//Added session creation using HttpSession in SessionServlet