package com.web.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.web.entity.ReportFirmEntity;
import com.web.entity.ReportUserEntity;
import com.web.repository.ReportUserRepository;

@RestController
public class ReportUserController {
	@Autowired
	private ReportUserRepository reportUserRepository;
	
	@GetMapping("/reportuser/all")
	public List<ReportUserEntity> getReportUserAll() {
		List<ReportUserEntity> list = reportUserRepository.findAll();
		System.out.println("查詢ReportUser全部資料成功");
		return list;
	}
}
