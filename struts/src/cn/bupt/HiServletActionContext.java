package cn.bupt;

import javax.servlet.http.HttpServletRequest;

import org.apache.struts2.ServletActionContext;

public class HiServletActionContext {
	public String execute() {
		HttpServletRequest request=ServletActionContext.getRequest();
		String username=request.getParameter("username");
		System.out.println(username);
		return "ok2";
	}
}
