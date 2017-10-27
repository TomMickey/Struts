<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<script src="js/angular.js"></script>
</head>
<body ng-app="first" ng-controller="myController">
	<h1>欢迎来到struts2</h1>
	<a href="hello.action">点击</a><br>
	<a href="execute.action">点击</a><br>
	<a href="nihao.action">你好</a>
	<input type="text" ng-model="name"/><br>
	<p ng-bind="name"></p>
	<p>{{user.name+","+user.age+","+user.gender}}</p>
	<script>
		var first=angular.module('first',[]);
		first.controller('myController',function($scope){
			$scope.user={name:'jack',age:24,gender:'女'}
		});
	</script>
	
</body>
</html>