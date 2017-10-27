<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<script src="js/angular.js"></script>
</head>
<body>
	<h1>欢迎使用angularJS</h1>
	<div ng-app="">
		<input type="text" ng-model="text"><br>
		<p ng-bind="text"></p>
	</div>
</body>
</html>