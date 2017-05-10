package com.example.domain;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

@Entity
public class Restaurant implements Serializable {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)

	private long id;
	@Column(nullable = false)
	private String name;
	@Column
	private String location;
	@Column
	private String description;

	@OneToOne
	private Menu menu;
	@OneToMany(cascade={CascadeType.MERGE})
	private Set<Manager> manager;
	@OneToMany(cascade={CascadeType.MERGE})
	private Set<Employee> employee;
	@ManyToMany(cascade={CascadeType.MERGE})
	private Set<Supplier> suppliers;

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "restaurant")
	private Set<TableOfRestaurant> tables;

	public Restaurant() {
	}

	public Restaurant(String name, String location) {
		super();
		this.name = name;
		this.location = location;
	}

	public Restaurant(String name, String location, Set<Manager> manager) {
		super();
		this.name = name;
		this.location = location;
		this.manager = manager;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public Set<Employee> getEmployee() {
		return employee;
	}

	public void setEmployee(Set<Employee> employee) {
		this.employee = employee;
	}

	public Set<Supplier> getSuppliers() {
		return suppliers;
	}

	public void setSuppliers(Set<Supplier> suppliers) {
		this.suppliers = suppliers;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public Set<Manager> getManager() {
		return manager;
	}

	public void setManager(Set<Manager> manager) {
		this.manager = manager;
	}

	
	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
	

	public Menu getMenu() {
		return menu;
	}

	public void setMenu(Menu menu) {
		this.menu = menu;
	}

	@Override
	public String toString() {
		return "Restaurant [name=" + name + ", location=" + location + ", manager=" + manager + "]";
	}

}
