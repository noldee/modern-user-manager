package com.api.demo.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;

import com.api.demo.models.UserModel;
import com.api.demo.repositories.IUserRepository;

@Service
public class UserServices {

	
	@Autowired
	IUserRepository userRepository;
	
	public ArrayList<UserModel> getUsers(){
		return (ArrayList<UserModel>) userRepository.findAll();
	}

	public UserModel saveUser(UserModel user) {
		return userRepository.save(user);
	}	
	
	public Optional<UserModel> getById(Long id){
		return userRepository.findById(id);
	}
	
	public UserModel updateById(UserModel request,  Long id){
		UserModel user = userRepository.findById(id).get();
		
		user.setFirstName(request.getFirstName());
		user.setLastName(request.getLastName());
		user.setEmail(request.getEmail());
		
		return userRepository.save(user);
	}
	
	public Boolean deleteUser(Long id) {
		try {
			userRepository.deleteById(id);
			return true;
		} catch (Exception e) {
			// TODO: handle exception
			return false;
		}
	}
	
	
}
