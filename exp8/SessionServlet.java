import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class SessionServlet extends HttpServlet {

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException {

        response.setContentType("text/html");
//Integrated session tracking mechanisms using servlet architecture
        String username = request.getParameter("username");
//Handled form data retrieval using request parameters
        HttpSession session = request.getSession();
        session.setAttribute("username", username);
//Improved session tracking implementation with dynamic user input handling
        PrintWriter out = response.getWriter();

        out.println("<h3>Session created successfully</h3>");
        out.println("Username stored in session: " + username);
    }
}//Added session creation using HttpSession in SessionServlet