import javax.faces.bean.ApplicationScoped;
import javax.faces.bean.ManagedBean;
import javax.faces.context.FacesContext;
import java.util.Map;

@ManagedBean(name = "controller", eager = true)
@ApplicationScoped
public class ControllerBean {
    private double x = 0;
    private String y = "0";
    private String r = "1";
    private String result = "";

    private DBManager manager = null;

    public ControllerBean() {
        manager = new DBManager();
    }

    public void checkArea() {
        try {
            y = AreaValidator.validateY(y);
            x = Double.parseDouble(AreaValidator.validateX(x + ""));
            r = AreaValidator.validateR(r);
            result = AreaValidator.checkArea(x + "", y, r);
        } catch (NumberFormatException e) {
            result = "Incorrect value(s)!";
        }

        manager.addDot(x,  Double.parseDouble(y),  Integer.parseInt(r), result);
        resetBean();
    }

    public void plotCheckArea() {
        Map<String, String> params = FacesContext.getCurrentInstance().getExternalContext().getRequestParameterMap();

        String plotX = params.get("x");
        String plotY = params.get("y");
        String plotR = params.get("r");

        try {
            plotY = AreaValidator.validateY(plotY);
            plotX = AreaValidator.validateX(plotX);
            plotR = AreaValidator.validateR(plotR);
            result = AreaValidator.checkArea(plotX, plotY, plotR);
        } catch (NumberFormatException e) {
            result = "Incorrect value(s)!";
        }

        if (manager != null) {
            manager.addDot(Double.parseDouble(plotX), Double.parseDouble(plotY), Integer.parseInt(plotR), result);
        }
        resetBean();
    }

    public void resetBean() {
        x = 0;
        y = "0";
        r = "1";
        result = "";
    }


    public void setX(int x) {
        this.x = x / 2.0;
    }

    public int getX() {
        return (int) (x * 2 + 0.5);
    }
    public void setY(String y) {
        this.y = y;
    }

    public String getY() {
        return y;
    }

    public String getR() {
        return r;
    }

    public void setR(String r) {
        this.r = r;
    }

    public String getResult() {
        return result;
    }
}
