package cn.bupt;

import java.util.Map;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

public class HelloAction extends ActionSupport{
	private String meg;
	private String savepath;
	private ActionContext actionContext=ActionContext.getContext();
	
	public String getSavepath() {
		return savepath;
	}
	public void setSavepath(String savepath) {
		this.savepath = savepath;
	}
	public String getMeg() {
		return meg;
	}
	public String execute() {
		Map<String,Object> applicationMap=actionContext.getApplication();
		applicationMap.put("applicationKey","hello");
		Map<String,Object> sessionMap=actionContext.getSession();
		sessionMap.put("sessionKey", 120);
		Map<String,Object> requestMap=(Map<String, Object>) actionContext.get("request");
		requestMap.put("requestKey", "request");
		this.meg="哈哈哈哈哈";
		System.out.println("你好！。。。。");
		return "ok";
	}
	public String add() {
		System.out.println("不好。。。。。");
		return SUCCESS;
	}

}
