import com.sun.istack.internal.NotNull;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Dot {
    @Id
    private int id;
    private double x;
    private double y;
    private double r;
    private String result;

    public Dot() { }

    public Dot(double x, double y, double r, String result) {
        setX(x);
        setY(y);
        setR(r);
        setResult(result);
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public double getX() {
        return x;
    }

    public void setX(double x) {
        this.x = x;
    }
    public double getY() {
        return y;
    }

    public void setY(double y) {
        this.y = y;
    }

    public double getR() {
        return r;
    }

    public void setR(double r) {
        this.r = r;
    }

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }

    public String toDotString() {
        int x_dot = (int) (x * 120 / r + 150);
        int y_dot = (int) (-y * 120 / r + 150);

        return "<circle r=\"3\" cx=\"" + x_dot + "\" cy=\"" + y_dot + "\" class=\"" +  r + "\" "
                + (result.toLowerCase().equals("true") ? "stroke=\"green\" fill=\"green\"" : "stroke=\"red\" fill=\"red\"")
                + "></circle>";
    }

    public String toTrString() {
        return "<tr>" + tdString(x) + tdString(y) + tdString(r) + tdString(result) + "</tr>";
    }

    private String tdString(@NotNull Object s) {
        return String.format("<td>%s</td>", s.toString());
    }
}