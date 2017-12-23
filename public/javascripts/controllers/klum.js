
<!-- Pass the user data to the function saveUser() -->
<form name="userForm" ng-submit="saveUser(userData)">

<div>

	<label>שם פרטי:</label>
	
	<br />

	<!-- The value is required and it must have at least 2 characters -->
	<input type="text" name="firstName" ng-model="userData.firstName"
	ng-required="true" ng-minlength="2" />

	<!-- $dirty is set to true if a user edited the input, then we check if the field has the required error -->
	<span class="error-message" ng-show="userForm.firstName.$dirty
	&& userForm.firstName.$error.required">
	נא להזין שם פרטי
	</span>

	<!-- if the element was edited we check if it contains at least 2 characters -->
	<span class="error-message" ng-show="userForm.firstName.$dirty
	  && userForm.firstName.$error.minlength">
	  השם חייב להכיל לפחות 2 אותיות
	</span>

</div>

<div>

	<label>שם משפחה:</label>
	
	<br />

	<input type="text" name="lastName" ng-model="userData.lastName"
	ng-required="true" ng-minlength="2" />

	<span class="error-message" ng-show="userForm.lastName.$dirty
	&& userForm.lastName.$error.required">
	נא להזין שם משפחה
	</span>

	<span class="error-message" ng-show="userForm.lastName.$dirty
	  && userForm.lastName.$error.minlength">
	שם המשפחה צריך להכיל לפחות 2 אותיות
	</span>

</div>

<div>

	<label>כתובת:</label> 
	
	<br />

	<!-- regex validation. only certain characters are allowed -->
	<input type="text" name="address" ng-model="userData.address"
	ng-required="true" ng-minlength="6" ng-pattern="/^[א-ת]{2,}[0-9א-ת,-. ]+$/" />

	<span class="error-message" ng-show="userForm.address.$dirty
	&& userForm.address.$invalid">שם העיר והרחוב בעברית בלבד
	

</div>

<div>

	<label>גיל</label>
	
	<br />
	
	<select name="age" ng-model="userData.age"  ng-required="true" ng-required="true">
		<option value="" selected="" disabled=""> נא לבחור </option>
		<option ng-repeat="field in ages" value="{{field.value}}">{{field.name}}</option>
	</select>

</div>

<div>

	<label>הרשמה לניוזלטר</label>
	
	<!-- The value will change according to the choice of the user -->
	<input type="checkbox" name="subscribe" ng-model="userData.subscribe" ng-true-value="'yes'"/>

</div>

<div>

	<!-- The button will be disabled until every input in the form is valid -->
	<input type="submit" value="שמור" ng-disabled="userForm.$invalid"/>
	
</div>
		
</form>