import java.sql.*;

public class CRUDExample {

    public static void main(String args[]) {

        Connection con = null;
        Statement stmt = null;
        ResultSet rs = null;

        try {

            Class.forName("com.mysql.cj.jdbc.Driver");

            con = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/studentdb",
                "root",
                "password"
            );

            stmt = con.createStatement();

            // INSERT
            stmt.executeUpdate("INSERT INTO student VALUES(1,'John')");

            // SELECT
            rs = stmt.executeQuery("SELECT * FROM student");

            System.out.println("Student Records:");
            while(rs.next()){
                System.out.println(rs.getInt(1) + " " + rs.getString(2));
            }

            // UPDATE
            stmt.executeUpdate("UPDATE student SET name='Mike' WHERE id=1");

            // DELETE
            stmt.executeUpdate("DELETE FROM student WHERE id=1");

            System.out.println("CRUD operations completed successfully.");

        } catch(Exception e) {
            e.printStackTrace();

        } finally {//Implemented INSERT operation for student records
            //Implemented SELECT operation to retrieve student data Added UPDATE functionality for modifying student records

            try { if(rs != null) rs.close(); } catch(Exception e) {}
            try { if(stmt != null) stmt.close(); } catch(Exception e) {}
            try { if(con != null) con.close(); } catch(Exception e) {}

        }
    }
}//Established MySQL database connection using JDBC driver