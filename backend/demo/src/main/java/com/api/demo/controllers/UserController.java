package com.api.demo.controllers;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.api.demo.models.UserModel;
import com.api.demo.services.UserServices;

@RestController
@RequestMapping("/user")
public class UserController {

	
	@Autowired
	private UserServices userServices;
	
	@GetMapping
	public ArrayList<UserModel> getUsers(){
		return	this.userServices.getUsers();
	}
	
	@PostMapping
	public UserModel saveUser(@RequestBody UserModel user) {
		return this.userServices.saveUser(user);
	}
	
	@GetMapping(path = "/{id}")
	public Optional<UserModel> getUserById(@PathVariable Long id){
		return this.userServices.getById(id);
	}
	
	
	@PutMapping(path = "/{id}")
	public UserModel updateUserById(@RequestBody UserModel request, @PathVariable("id") Long id) {
		return this.userServices.updateById(request, id);
	}
	
	@DeleteMapping(path = "/{id}")
	public String deleteById(@PathVariable("id") Long id) {
		boolean ok = this.userServices.deleteUser(id);
		if (ok) {
			return "User whit id " + id + "delete!!";
		}else {
			return "Error";
		}
	}
	
	
}
