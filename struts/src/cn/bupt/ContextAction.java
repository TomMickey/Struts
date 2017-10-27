package cn.bupt;

import java.util.Map;

import org.apache.struts2.interceptor.ApplicationAware;
import org.apache.struts2.interceptor.RequestAware;
import org.apache.struts2.interceptor.SessionAware;

public class ContextAction implements ApplicationAware,SessionAware,RequestAware{
	public String execute() {
		application.put("appkey", "app");
		return "ok1";
	}
	private Map<String,Object> application;
	@Override
	public void setApplication(Map<String, Object> arg0) {
		this.application=arg0;
		
	}
	@Override
	public void setRequest(Map<String, Object> arg0) {
		// TODO Auto-generated method stub
		
	}
	@Override
	public void setSession(Map<String, Object> arg0) {
		// TODO Auto-generated method stub
		
	}

}
