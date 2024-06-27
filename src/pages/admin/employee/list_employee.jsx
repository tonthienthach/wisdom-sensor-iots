import React, { useEffect, useState } from 'react';
import './list_employee.css';

// Fake data for demonstration
const employees = [
    { id: 1, name: 'Nguyen Cao Danh', department: 'Director' },
    { id: 2, name: 'Tran Quang Huy', department: 'IT Department' },
    { id: 3, name: 'Huynh Van Duy', department: 'Marketing' },
    { id: 4, name: 'Nguyen Manh Khang', department: 'Human Resources' },
    { id: 5, name: 'Pham Thi Mai', department: 'Finance' },
    { id: 6, name: 'Le Van Nam', department: 'IT Department' },
    { id: 7, name: 'Tran Thanh Tung', department: 'Marketing' },
    { id: 8, name: 'Nguyen Thi Hien', department: 'Human Resources' },
    { id: 9, name: 'Hoang Van Tuan', department: 'Director' },
    { id: 10, name: 'Do Minh Tam', department: 'IT Department' },
    { id: 11, name: 'Nguyen Thi Lan', department: 'Marketing' },
    { id: 12, name: 'Tran Van Thanh', department: 'Human Resources' },
];

const EmployeeList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [employeesPerPage] = useState(4); // Number of employees per page

    useEffect(() => {
        // Function to handle navigation links
        const handleNavigation = () => {
            const links = document.querySelectorAll('.nav-menu a');
            links.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    links.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                    const targetIframe = link.getAttribute('id').replace('-link', 'Iframe');
                    document.querySelectorAll('iframe.content').forEach(iframe => iframe.style.display = 'none');
                    document.getElementById(targetIframe).style.display = 'block';
                });
            });
        };

        // Fetch data and handle navigation
        const fetchDataAndHandleNavigation = async () => {
            handleNavigation();

            // Default active link
            const defaultLink = document.getElementById('home-link');
            if (defaultLink) {
                defaultLink.classList.add('active');
                document.getElementById('homeIframe').style.display = 'block';
            }
        };

        fetchDataAndHandleNavigation();
    }, []);

    const indexOfLastEmployee = currentPage * employeesPerPage;
    const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
    const currentEmployees = employees.slice(indexOfFirstEmployee, indexOfLastEmployee);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <div id="header-placeholder"></div>
            <div className="employee-list">
                <div className="search-bar">
                    <input type="text" placeholder="Search employee name" />
                    <i className="fas fa-search"></i>
                </div>
                <button className="add-button-list" id="addButton" onClick={() => window.location.assign('../admin/addemployee')}>
                    + ADD
                </button>
                <h2 className="gradient-text">Wisdom Employee</h2>
                <div className="departments">
                    {/* Department and employee containers here */}
                </div>
                <div className="employee-list-container">
                    {currentEmployees.map((employee) => (
                        <div key={employee.id} className="employee-container">
                            <div className="employee">
                                <ul>
                                    <li>{employee.name}</li>
                                    <li>{employee.department}</li>
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
                <ul className="pagination">
                    {pageNumbers.map((number) => (
                        <li key={number} className="page-item">
                            <a onClick={() => paginate(number)} href="!#" className="page-link">
                                {number}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div id="footer-placeholder"></div>
        </div>
    );
};

// Pagination logic
const pageNumbers = [];
for (let i = 1; i <= Math.ceil(employees.length / 4); i++) {
    pageNumbers.push(i);
}

export default EmployeeList;
