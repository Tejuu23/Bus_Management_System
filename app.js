// Bus Management System Application
class BusManagementSystem {
    constructor() {
        this.currentUser = null;
        this.currentSection = 'landingSection';
        this.selectedSeats = [];
        this.currentBooking = null;
        this.charts = {};
        
        // Sample data from the provided JSON
        this.data = {
            buses: [
                {
                    id: "BUS001",
                    plateNumber: "ABC-123",
                    model: "Volvo B7R",
                    capacity: 45,
                    status: "Active",
                    lastMaintenance: "2025-07-15",
                    fuelLevel: 85,
                    currentRoute: "RT001",
                    driverId: "DRV001"
                },
                {
                    id: "BUS002", 
                    plateNumber: "XYZ-456",
                    model: "Mercedes Citaro",
                    capacity: 42,
                    status: "Maintenance",
                    lastMaintenance: "2025-08-10",
                    fuelLevel: 60,
                    currentRoute: null,
                    driverId: null
                },
                {
                    id: "BUS003",
                    plateNumber: "DEF-789",
                    model: "Scania K280",
                    capacity: 50,
                    status: "Active",
                    lastMaintenance: "2025-07-20",
                    fuelLevel: 92,
                    currentRoute: "RT002",
                    driverId: "DRV002"
                }
            ],
            routes: [
                {
                    id: "RT001",
                    name: "City Center - Airport",
                    distance: "25 km",
                    estimatedTime: "45 min",
                    stops: [
                        {name: "City Center Station", time: "06:00"},
                        {name: "Mall Junction", time: "06:15"},
                        {name: "University Campus", time: "06:25"},
                        {name: "Business District", time: "06:35"},
                        {name: "Airport Terminal", time: "06:45"}
                    ],
                    status: "Active",
                    frequency: "Every 30 minutes"
                },
                {
                    id: "RT002",
                    name: "Downtown Loop",
                    distance: "15 km", 
                    estimatedTime: "30 min",
                    stops: [
                        {name: "Central Station", time: "07:00"},
                        {name: "Museum District", time: "07:08"},
                        {name: "Shopping Center", time: "07:15"},
                        {name: "Convention Center", time: "07:22"},
                        {name: "Central Station", time: "07:30"}
                    ],
                    status: "Active",
                    frequency: "Every 15 minutes"
                },
                {
                    id: "RT003",
                    name: "Residential - Industrial",
                    distance: "20 km",
                    estimatedTime: "40 min", 
                    stops: [
                        {name: "Green Valley", time: "05:30"},
                        {name: "Sunset Boulevard", time: "05:40"},
                        {name: "Riverside Park", time: "05:50"},
                        {name: "Industrial Zone", time: "06:10"}
                    ],
                    status: "Active",
                    frequency: "Every 45 minutes"
                }
            ],
            drivers: [
                {
                    id: "DRV001",
                    name: "John Smith",
                    license: "CDL-12345",
                    experience: "8 years",
                    rating: 4.8,
                    status: "On Duty",
                    phone: "+1-555-0101",
                    emergencyContact: "+1-555-0102",
                    licenseExpiry: "2026-03-15"
                },
                {
                    id: "DRV002",
                    name: "Maria Garcia",
                    license: "CDL-67890", 
                    experience: "12 years",
                    rating: 4.9,
                    status: "On Duty",
                    phone: "+1-555-0201",
                    emergencyContact: "+1-555-0202",
                    licenseExpiry: "2026-08-22"
                },
                {
                    id: "DRV003",
                    name: "David Johnson",
                    license: "CDL-11111",
                    experience: "5 years",
                    rating: 4.6,
                    status: "Off Duty", 
                    phone: "+1-555-0301",
                    emergencyContact: "+1-555-0302",
                    licenseExpiry: "2025-12-10"
                }
            ],
            passengers: [
                {
                    id: "PSG001",
                    name: "Alice Johnson",
                    email: "alice@email.com",
                    phone: "+1-555-1001",
                    membershipType: "Premium",
                    totalTrips: 45,
                    loyaltyPoints: 1250
                },
                {
                    id: "PSG002",
                    name: "Robert Brown",
                    email: "robert@email.com", 
                    phone: "+1-555-1002",
                    membershipType: "Standard",
                    totalTrips: 12,
                    loyaltyPoints: 320
                }
            ],
            schedules: [
                {
                    id: "SCH001",
                    routeId: "RT001",
                    busId: "BUS001", 
                    driverId: "DRV001",
                    departureTime: "06:00",
                    arrivalTime: "06:45",
                    date: "2025-08-14",
                    status: "Scheduled",
                    seatsBooked: 28,
                    seatsAvailable: 17,
                    fare: 15.50
                },
                {
                    id: "SCH002",
                    routeId: "RT002",
                    busId: "BUS003",
                    driverId: "DRV002", 
                    departureTime: "07:00",
                    arrivalTime: "07:30",
                    date: "2025-08-14",
                    status: "In Progress",
                    seatsBooked: 35,
                    seatsAvailable: 15,
                    fare: 12.00
                }
            ],
            bookings: [
                {
                    id: "BK001",
                    passengerId: "PSG001",
                    scheduleId: "SCH001",
                    seatNumber: "A12",
                    bookingDate: "2025-08-13",
                    status: "Confirmed",
                    fare: 15.50,
                    paymentStatus: "Paid"
                },
                {
                    id: "BK002", 
                    passengerId: "PSG002",
                    scheduleId: "SCH002",
                    seatNumber: "B08",
                    bookingDate: "2025-08-13",
                    status: "Confirmed",
                    fare: 12.00,
                    paymentStatus: "Paid"
                }
            ],
            maintenance: [
                {
                    id: "MNT001",
                    busId: "BUS001",
                    type: "Routine Service",
                    scheduledDate: "2025-08-20",
                    cost: 450.00,
                    status: "Scheduled",
                    description: "Oil change, brake inspection, tire rotation"
                },
                {
                    id: "MNT002",
                    busId: "BUS002", 
                    type: "Engine Repair",
                    scheduledDate: "2025-08-15",
                    cost: 1200.00,
                    status: "In Progress",
                    description: "Engine diagnostic and repair"
                }
            ]
        };

        this.init();
    }

    init() {
        console.log('Initializing Bus Management System...');
        this.loadUserData();
        
        // Wait for DOM to be ready before setting up event listeners
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.setupApplication();
            });
        } else {
            this.setupApplication();
        }
    }

    setupApplication() {
        console.log('Setting up application...');
        this.bindAllEvents();
        this.updateAuthUI();
        this.renderFleet();
        this.renderRoutes();
        this.renderSchedules();
        this.renderMaintenance();
        this.populateFormOptions();
        this.initializeCalendar();
        this.startRealTimeUpdates();
        
        // Initialize charts after a brief delay
        setTimeout(() => {
            this.updateDashboardStats();
            this.initializeCharts();
        }, 500);
        
        console.log('Application setup complete');
    }

    bindAllEvents() {
        console.log('Binding all events...');
        
        // Navigation
        this.setupNavigation();
        
        // Authentication
        this.setupAuth();
        
        // Dashboard
        this.setupDashboard();
        
        // Scheduling
        this.setupScheduling();
        
        // Routes
        this.setupRoutes();
        
        // Booking
        this.setupBooking();
        
        // Fleet Management
        this.setupFleet();
        
        // Maintenance
        this.setupMaintenance();
        
        // Reports
        this.setupReports();
        
        // Modals
        this.setupModals();

        console.log('All event listeners bound successfully');
    }

    setupNavigation() {
        console.log('Setting up navigation...');
        
        // Bottom navigation
        const navItems = document.querySelectorAll('.nav-item');
        console.log(`Found ${navItems.length} nav items`);
        
        navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const targetSection = item.dataset.section;
                console.log('Navigation clicked:', targetSection);
                this.showSection(targetSection);
                
                // Update active nav item
                navItems.forEach(nav => nav.classList.remove('active'));
                item.classList.add('active');
            });
        });

        // Brand logo - home navigation
        const navBrand = document.querySelector('.nav-brand');
        if (navBrand) {
            navBrand.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Brand clicked - going to landing');
                this.showSection('landingSection');
                this.updateActiveNavItem('landingSection');
            });
        }

        // Hero buttons
        const getStartedBtn = document.getElementById('getStartedBtn');
        const learnMoreBtn = document.getElementById('learnMoreBtn');
        
        if (getStartedBtn) {
            console.log('Binding get started button');
            getStartedBtn.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Get Started clicked');
                if (this.currentUser) {
                    this.showSection('dashboardSection');
                    this.updateActiveNavItem('dashboardSection');
                } else {
                    this.showSection('authSection');
                    this.updateActiveNavItem('authSection');
                }
            });
        }
        
        if (learnMoreBtn) {
            console.log('Binding learn more button');
            learnMoreBtn.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Learn More clicked');
                this.showToast('Welcome to TransitPro! Explore our comprehensive bus management features.', 'info');
            });
        }
        
        console.log('Navigation setup complete');
    }

    setupAuth() {
        const loginBtn = document.getElementById('loginBtn');
        const authSwitchBtn = document.getElementById('authSwitchBtn');
        const loginForm = document.getElementById('loginForm');
        const registerForm = document.getElementById('registerForm');

        if (loginBtn) {
            loginBtn.addEventListener('click', (e) => {
                e.preventDefault();
                if (this.currentUser) {
                    this.logout();
                } else {
                    this.showSection('authSection');
                    this.updateActiveNavItem('authSection');
                }
            });
        }

        if (authSwitchBtn) {
            authSwitchBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleAuthForm();
            });
        }

        if (loginForm) {
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleLogin();
            });
        }

        if (registerForm) {
            registerForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleRegister();
            });
        }
    }

    setupDashboard() {
        const refreshBtn = document.getElementById('refreshDashboard');
        const quickActionsBtn = document.getElementById('quickActions');

        if (refreshBtn) {
            refreshBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.refreshDashboard();
            });
        }

        if (quickActionsBtn) {
            quickActionsBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.showToast('Quick actions menu coming soon!', 'info');
            });
        }
    }

    setupScheduling() {
        const addScheduleBtn = document.getElementById('addScheduleBtn');
        const prevMonthBtn = document.getElementById('prevMonth');
        const nextMonthBtn = document.getElementById('nextMonth');
        const addScheduleForm = document.getElementById('addScheduleForm');

        if (addScheduleBtn) {
            addScheduleBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.showModal('scheduleModal');
            });
        }

        if (prevMonthBtn) {
            prevMonthBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.navigateMonth(-1);
            });
        }

        if (nextMonthBtn) {
            nextMonthBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.navigateMonth(1);
            });
        }

        if (addScheduleForm) {
            addScheduleForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleAddSchedule();
            });
        }
    }

    setupRoutes() {
        const addRouteBtn = document.getElementById('addRouteBtn');
        const viewMapBtn = document.getElementById('viewMapBtn');
        const addRouteForm = document.getElementById('addRouteForm');
        const addStopBtn = document.getElementById('addStopBtn');

        if (addRouteBtn) {
            addRouteBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.showModal('routeModal');
            });
        }

        if (viewMapBtn) {
            viewMapBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.showToast('Interactive map view coming soon!', 'info');
            });
        }

        if (addRouteForm) {
            addRouteForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleAddRoute();
            });
        }

        if (addStopBtn) {
            addStopBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.addStopInput();
            });
        }
    }

    setupBooking() {
        const bookingSearchForm = document.getElementById('bookingSearchForm');

        if (bookingSearchForm) {
            bookingSearchForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.searchBuses();
            });
        }

        // Set default date to tomorrow
        const travelDate = document.getElementById('travelDate');
        if (travelDate) {
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            travelDate.value = tomorrow.toISOString().split('T')[0];
            travelDate.min = new Date().toISOString().split('T')[0];
        }
    }

    setupFleet() {
        const addBusBtn = document.getElementById('addBusBtn');
        const exportFleetBtn = document.getElementById('exportFleetBtn');
        const statusFilter = document.getElementById('statusFilter');
        const routeFilter = document.getElementById('routeFilter');
        const searchBus = document.getElementById('searchBus');

        if (addBusBtn) {
            addBusBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.showToast('Add new bus form coming soon!', 'info');
            });
        }

        if (exportFleetBtn) {
            exportFleetBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.exportFleetData();
            });
        }

        if (statusFilter) {
            statusFilter.addEventListener('change', () => {
                this.filterFleet();
            });
        }

        if (routeFilter) {
            routeFilter.addEventListener('change', () => {
                this.filterFleet();
            });
        }

        if (searchBus) {
            searchBus.addEventListener('input', () => {
                this.filterFleet();
            });
        }
    }

    setupMaintenance() {
        const scheduleMaintenanceBtn = document.getElementById('scheduleMaintenance');

        if (scheduleMaintenanceBtn) {
            scheduleMaintenanceBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.showToast('Schedule maintenance form coming soon!', 'info');
            });
        }
    }

    setupReports() {
        const generateReportBtn = document.getElementById('generateReport');
        const exportReportsBtn = document.getElementById('exportReports');
        const reportType = document.getElementById('reportType');
        const reportPeriod = document.getElementById('reportPeriod');

        if (generateReportBtn) {
            generateReportBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.generateReport();
            });
        }

        if (exportReportsBtn) {
            exportReportsBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.exportReport();
            });
        }

        if (reportType) {
            reportType.addEventListener('change', () => {
                this.updateReportChart();
            });
        }

        if (reportPeriod) {
            reportPeriod.addEventListener('change', () => {
                this.updateReportChart();
            });
        }
    }

    setupModals() {
        // Close buttons
        document.querySelectorAll('.close-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const modal = btn.closest('.modal');
                if (modal) {
                    this.hideModal(modal.id);
                }
            });
        });

        // Seat booking
        const confirmBookingBtn = document.getElementById('confirmBooking');
        if (confirmBookingBtn) {
            confirmBookingBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.handleBookingConfirmation();
            });
        }

        // Close modals when clicking outside
        document.addEventListener('click', (e) => {
            const modals = document.querySelectorAll('.modal:not(.hidden)');
            modals.forEach(modal => {
                if (e.target === modal) {
                    this.hideModal(modal.id);
                }
            });
        });
    }

    showSection(sectionId) {
        console.log('Showing section:', sectionId);
        
        // Hide all sections
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            section.classList.remove('active');
        });

        // Show target section
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
            this.currentSection = sectionId;
            
            // Initialize section-specific functionality
            this.initializeSectionContent(sectionId);
            console.log(`Successfully showed section: ${sectionId}`);
        } else {
            console.error(`Section not found: ${sectionId}`);
        }
    }

    initializeSectionContent(sectionId) {
        switch(sectionId) {
            case 'dashboardSection':
                this.updateDashboardStats();
                this.renderActivityFeed();
                this.renderAlerts();
                setTimeout(() => this.initializeCharts(), 100);
                break;
            case 'schedulingSection':
                this.renderScheduleCalendar();
                this.renderTodaySchedules();
                break;
            case 'bookingSection':
                this.renderAvailableBuses();
                break;
            case 'reportsSection':
                this.updateReportChart();
                this.updateReportSummary();
                break;
        }
    }

    updateActiveNavItem(sectionId) {
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            if (item.dataset.section === sectionId) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    showModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('hidden');
            
            // Initialize modal content
            if (modalId === 'seatModal' && this.currentBooking) {
                this.renderSeatLayout();
            }
        }
    }

    hideModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('hidden');
        }
    }

    // Authentication Methods
    toggleAuthForm() {
        const loginForm = document.getElementById('loginForm');
        const registerForm = document.getElementById('registerForm');
        const authTitle = document.getElementById('authTitle');
        const authSubtitle = document.getElementById('authSubtitle');
        const authSwitchText = document.getElementById('authSwitchText');
        const authSwitchBtn = document.getElementById('authSwitchBtn');

        if (loginForm && registerForm && authTitle && authSubtitle && authSwitchText && authSwitchBtn) {
            if (loginForm.classList.contains('hidden')) {
                // Show login form
                loginForm.classList.remove('hidden');
                registerForm.classList.add('hidden');
                authTitle.textContent = 'Welcome Back';
                authSubtitle.textContent = 'Sign in to your TransitPro account';
                authSwitchText.innerHTML = `Don't have an account? `;
                authSwitchBtn.textContent = 'Sign up here';
            } else {
                // Show register form
                loginForm.classList.add('hidden');
                registerForm.classList.remove('hidden');
                authTitle.textContent = 'Create Account';
                authSubtitle.textContent = 'Join TransitPro today';
                authSwitchText.innerHTML = `Already have an account? `;
                authSwitchBtn.textContent = 'Sign in here';
            }
        }
    }

    handleLogin() {
        const emailInput = document.getElementById('loginEmail');
        const passwordInput = document.getElementById('loginPassword');
        const roleInput = document.getElementById('userRole');

        if (!emailInput || !passwordInput || !roleInput) {
            this.showToast('Login form not found', 'error');
            return;
        }

        const email = emailInput.value;
        const password = passwordInput.value;
        const role = roleInput.value;

        if (email && password && role) {
            this.currentUser = {
                email: email,
                name: email.split('@')[0],
                role: role,
                id: 'USR' + Date.now()
            };
            
            this.saveUserData();
            this.updateAuthUI();
            this.showSection('dashboardSection');
            this.updateActiveNavItem('dashboardSection');
            this.showToast(`Welcome back! Logged in as ${role}.`, 'success');
            
            // Clear form
            emailInput.value = '';
            passwordInput.value = '';
            roleInput.value = '';
        } else {
            this.showToast('Please fill in all fields', 'error');
        }
    }

    handleRegister() {
        const nameInput = document.getElementById('registerName');
        const emailInput = document.getElementById('registerEmail');
        const passwordInput = document.getElementById('registerPassword');
        const roleInput = document.getElementById('registerRole');

        if (!nameInput || !emailInput || !passwordInput || !roleInput) {
            this.showToast('Registration form not found', 'error');
            return;
        }

        const name = nameInput.value;
        const email = emailInput.value;
        const password = passwordInput.value;
        const role = roleInput.value;

        if (name && email && password && role) {
            this.currentUser = {
                email: email,
                name: name,
                role: role,
                id: 'USR' + Date.now()
            };
            
            this.saveUserData();
            this.updateAuthUI();
            this.showSection('dashboardSection');
            this.updateActiveNavItem('dashboardSection');
            this.showToast(`Welcome ${name}! Account created successfully.`, 'success');
            
            // Clear form
            nameInput.value = '';
            emailInput.value = '';
            passwordInput.value = '';
            roleInput.value = '';
        } else {
            this.showToast('Please fill in all fields', 'error');
        }
    }

    logout() {
        this.currentUser = null;
        this.saveUserData();
        this.updateAuthUI();
        this.showSection('landingSection');
        this.updateActiveNavItem('landingSection');
        this.showToast('Logged out successfully', 'info');
    }

    updateAuthUI() {
        const loginBtn = document.getElementById('loginBtn');
        if (loginBtn) {
            if (this.currentUser) {
                loginBtn.innerHTML = `<i class="fas fa-user"></i> ${this.currentUser.name}`;
                loginBtn.title = 'Click to logout';
            } else {
                loginBtn.innerHTML = '<i class="fas fa-sign-in-alt"></i> Login';
                loginBtn.title = 'Click to login';
            }
        }
    }

    // Dashboard Methods
    updateDashboardStats() {
        console.log('Updating dashboard stats...');
        
        const totalBusesEl = document.getElementById('totalBuses');
        const totalRoutesEl = document.getElementById('totalRoutes');
        const totalPassengersEl = document.getElementById('totalPassengers');
        const totalRevenueEl = document.getElementById('totalRevenue');

        if (totalBusesEl) totalBusesEl.textContent = this.data.buses.length;
        if (totalRoutesEl) totalRoutesEl.textContent = this.data.routes.length;
        
        const totalPassengers = this.data.passengers.reduce((sum, p) => sum + p.totalTrips, 0);
        if (totalPassengersEl) totalPassengersEl.textContent = totalPassengers.toLocaleString();
        
        const monthlyRevenue = this.data.bookings.reduce((sum, b) => sum + b.fare, 0) * 30; // Simulate monthly
        if (totalRevenueEl) totalRevenueEl.textContent = `$${monthlyRevenue.toLocaleString()}`;
    }

    refreshDashboard() {
        this.showToast('Refreshing dashboard data...', 'info');
        
        // Simulate data refresh
        setTimeout(() => {
            this.updateDashboardStats();
            this.renderActivityFeed();
            this.renderAlerts();
            if (this.currentSection === 'dashboardSection') {
                this.initializeCharts();
            }
            this.showToast('Dashboard refreshed successfully!', 'success');
        }, 1000);
    }

    renderActivityFeed() {
        const activityFeed = document.getElementById('activityFeed');
        if (!activityFeed) return;

        const activities = [
            {
                icon: 'fas fa-bus',
                text: 'Bus BUS001 completed route City Center - Airport',
                time: '2 minutes ago',
                type: 'success'
            },
            {
                icon: 'fas fa-user-plus',
                text: 'New passenger registered: Alice Johnson',
                time: '5 minutes ago',
                type: 'info'
            },
            {
                icon: 'fas fa-wrench',
                text: 'Maintenance scheduled for Bus BUS002',
                time: '10 minutes ago',
                type: 'warning'
            },
            {
                icon: 'fas fa-ticket-alt',
                text: '12 new bookings for tomorrow',
                time: '15 minutes ago',
                type: 'success'
            },
            {
                icon: 'fas fa-route',
                text: 'New route Downtown Loop added',
                time: '1 hour ago',
                type: 'info'
            }
        ];

        activityFeed.innerHTML = activities.map(activity => `
            <div class="activity-item">
                <div class="activity-icon ${activity.type}">
                    <i class="${activity.icon}"></i>
                </div>
                <div class="activity-content">
                    <div class="activity-text">${activity.text}</div>
                    <div class="activity-time">${activity.time}</div>
                </div>
            </div>
        `).join('');
    }

    renderAlerts() {
        const alertList = document.getElementById('alertList');
        if (!alertList) return;

        const alerts = [
            {
                type: 'warning',
                message: 'Bus BUS003 fuel level below 20%',
                time: 'Just now'
            },
            {
                type: 'critical',
                message: 'Driver DRV003 license expires in 4 months',
                time: '1 hour ago'
            },
            {
                type: 'success',
                message: 'All scheduled maintenance completed',
                time: '2 hours ago'
            }
        ];

        alertList.innerHTML = alerts.map(alert => `
            <div class="alert-item ${alert.type}">
                <div class="alert-content">
                    <div class="alert-text">${alert.message}</div>
                    <div class="alert-time">${alert.time}</div>
                </div>
            </div>
        `).join('');
    }

    // Chart Initialization
    initializeCharts() {
        console.log('Initializing charts...');
        this.initializeBusChart();
        this.initializeRouteChart();
        this.initializeReportsChart();
    }

    initializeBusChart() {
        const canvas = document.getElementById('busChart');
        if (!canvas) return;

        try {
            const ctx = canvas.getContext('2d');
            
            if (this.charts.busChart) {
                this.charts.busChart.destroy();
            }

            const statusData = this.data.buses.reduce((acc, bus) => {
                acc[bus.status] = (acc[bus.status] || 0) + 1;
                return acc;
            }, {});

            this.charts.busChart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: Object.keys(statusData),
                    datasets: [{
                        data: Object.values(statusData),
                        backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C'],
                        borderWidth: 2,
                        borderColor: '#fff'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom'
                        }
                    }
                }
            });
        } catch (error) {
            console.error('Error initializing bus chart:', error);
        }
    }

    initializeRouteChart() {
        const canvas = document.getElementById('routeChart');
        if (!canvas) return;

        try {
            const ctx = canvas.getContext('2d');
            
            if (this.charts.routeChart) {
                this.charts.routeChart.destroy();
            }

            this.charts.routeChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: this.data.routes.map(r => r.name),
                    datasets: [{
                        label: 'Daily Passengers',
                        data: [120, 85, 65], // Sample data
                        backgroundColor: '#1FB8CD',
                        borderRadius: 4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        } catch (error) {
            console.error('Error initializing route chart:', error);
        }
    }

    initializeReportsChart() {
        const canvas = document.getElementById('reportsChart');
        if (!canvas) return;

        try {
            const ctx = canvas.getContext('2d');
            
            if (this.charts.reportsChart) {
                this.charts.reportsChart.destroy();
            }

            this.charts.reportsChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    datasets: [{
                        label: 'Revenue ($)',
                        data: [1200, 1900, 1500, 2200, 1800, 2400, 2100],
                        borderColor: '#1FB8CD',
                        backgroundColor: 'rgba(31, 184, 205, 0.1)',
                        fill: true,
                        tension: 0.4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                callback: function(value) {
                                    return '$' + value;
                                }
                            }
                        }
                    }
                }
            });
        } catch (error) {
            console.error('Error initializing reports chart:', error);
        }
    }

    // Fleet Management
    renderFleet() {
        const fleetGrid = document.getElementById('fleetGrid');
        if (!fleetGrid) return;

        fleetGrid.innerHTML = this.data.buses.map(bus => {
            const route = this.data.routes.find(r => r.id === bus.currentRoute);
            const driver = this.data.drivers.find(d => d.id === bus.driverId);
            
            return `
                <div class="bus-card" data-status="${bus.status}" data-route="${bus.currentRoute || ''}">
                    <div class="bus-card-header">
                        <div class="bus-id">${bus.id}</div>
                        <span class="bus-status ${bus.status.toLowerCase().replace(' ', '-')}">${bus.status}</span>
                    </div>
                    <div class="bus-card-body">
                        <div class="bus-details-grid">
                            <div class="bus-detail">
                                <span class="bus-detail-label">Plate Number</span>
                                <span class="bus-detail-value">${bus.plateNumber}</span>
                            </div>
                            <div class="bus-detail">
                                <span class="bus-detail-label">Model</span>
                                <span class="bus-detail-value">${bus.model}</span>
                            </div>
                            <div class="bus-detail">
                                <span class="bus-detail-label">Capacity</span>
                                <span class="bus-detail-value">${bus.capacity} seats</span>
                            </div>
                            <div class="bus-detail">
                                <span class="bus-detail-label">Current Route</span>
                                <span class="bus-detail-value">${route ? route.name : 'None'}</span>
                            </div>
                            <div class="bus-detail">
                                <span class="bus-detail-label">Driver</span>
                                <span class="bus-detail-value">${driver ? driver.name : 'Unassigned'}</span>
                            </div>
                            <div class="bus-detail">
                                <span class="bus-detail-label">Last Maintenance</span>
                                <span class="bus-detail-value">${new Date(bus.lastMaintenance).toLocaleDateString()}</span>
                            </div>
                        </div>
                        <div class="fuel-meter">
                            <div class="fuel-label">Fuel Level: ${bus.fuelLevel}%</div>
                            <div class="fuel-bar">
                                <div class="fuel-fill" style="width: ${bus.fuelLevel}%"></div>
                            </div>
                        </div>
                        <div class="bus-actions">
                            <button class="btn btn--outline btn--sm" onclick="app.viewBusDetails('${bus.id}')">
                                <i class="fas fa-eye"></i> View
                            </button>
                            <button class="btn btn--primary btn--sm" onclick="app.editBus('${bus.id}')">
                                <i class="fas fa-edit"></i> Edit
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    filterFleet() {
        const statusFilter = document.getElementById('statusFilter')?.value;
        const routeFilter = document.getElementById('routeFilter')?.value;
        const searchTerm = document.getElementById('searchBus')?.value.toLowerCase();
        
        const busCards = document.querySelectorAll('.bus-card');
        
        busCards.forEach(card => {
            let show = true;
            
            if (statusFilter && !card.dataset.status.includes(statusFilter)) {
                show = false;
            }
            
            if (routeFilter && card.dataset.route !== routeFilter) {
                show = false;
            }
            
            if (searchTerm) {
                const cardText = card.textContent.toLowerCase();
                if (!cardText.includes(searchTerm)) {
                    show = false;
                }
            }
            
            card.style.display = show ? 'block' : 'none';
        });
    }

    viewBusDetails(busId) {
        const bus = this.data.buses.find(b => b.id === busId);
        if (bus) {
            this.showToast(`Viewing details for ${bus.plateNumber} (${bus.model})`, 'info');
        }
    }

    editBus(busId) {
        const bus = this.data.buses.find(b => b.id === busId);
        if (bus) {
            this.showToast(`Edit form for ${bus.plateNumber} coming soon!`, 'info');
        }
    }

    exportFleetData() {
        const csvContent = "data:text/csv;charset=utf-8," 
            + "Bus ID,Plate Number,Model,Capacity,Status,Current Route,Fuel Level,Last Maintenance\n"
            + this.data.buses.map(bus => {
                const route = this.data.routes.find(r => r.id === bus.currentRoute);
                return `${bus.id},${bus.plateNumber},${bus.model},${bus.capacity},${bus.status},${route ? route.name : 'None'},${bus.fuelLevel}%,${bus.lastMaintenance}`;
            }).join("\n");

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "fleet_data.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        this.showToast('Fleet data exported successfully!', 'success');
    }

    // Route Management
    renderRoutes() {
        const routesGrid = document.getElementById('routesGrid');
        if (!routesGrid) return;

        routesGrid.innerHTML = this.data.routes.map(route => `
            <div class="route-card" onclick="app.selectRoute('${route.id}')">
                <div class="route-header">
                    <div class="route-name">${route.name}</div>
                    <span class="route-status">${route.status}</span>
                </div>
                <div class="route-info">
                    <div class="route-metric">
                        <div class="route-metric-value">${route.distance}</div>
                        <div class="route-metric-label">Distance</div>
                    </div>
                    <div class="route-metric">
                        <div class="route-metric-value">${route.estimatedTime}</div>
                        <div class="route-metric-label">Duration</div>
                    </div>
                </div>
                <div class="route-stops">
                    <strong>Frequency:</strong> ${route.frequency}<br>
                    <strong>Stops:</strong> ${route.stops.length} stops
                </div>
            </div>
        `).join('');
    }

    selectRoute(routeId) {
        const route = this.data.routes.find(r => r.id === routeId);
        if (route) {
            this.showToast(`Selected route: ${route.name}`, 'info');
        }
    }

    handleAddRoute() {
        const routeName = document.getElementById('routeName')?.value;
        const distance = document.getElementById('routeDistance')?.value;
        const estimatedTime = document.getElementById('estimatedTime')?.value;
        
        if (routeName && distance && estimatedTime) {
            const newRoute = {
                id: 'RT' + (this.data.routes.length + 1).toString().padStart(3, '0'),
                name: routeName,
                distance: distance + ' km',
                estimatedTime: estimatedTime + ' min',
                stops: [],
                status: 'Active',
                frequency: 'Every 30 minutes'
            };
            
            this.data.routes.push(newRoute);
            this.renderRoutes();
            this.populateFormOptions();
            this.hideModal('routeModal');
            document.getElementById('addRouteForm')?.reset();
            this.showToast(`Route "${routeName}" added successfully!`, 'success');
        } else {
            this.showToast('Please fill in all required fields', 'error');
        }
    }

    addStopInput() {
        const container = document.getElementById('stopsContainer');
        if (!container) return;
        
        const stopDiv = document.createElement('div');
        stopDiv.className = 'stop-input';
        stopDiv.innerHTML = `
            <input type="text" class="form-control" placeholder="Stop name" required>
            <input type="time" class="form-control" required>
            <button type="button" class="btn btn--outline btn--sm remove-stop">
                <i class="fas fa-trash"></i>
            </button>
        `;
        container.appendChild(stopDiv);
        
        stopDiv.querySelector('.remove-stop').addEventListener('click', () => {
            stopDiv.remove();
        });
    }

    // Other methods continue...
    searchBuses() {
        const fromStation = document.getElementById('fromStation')?.value;
        const toStation = document.getElementById('toStation')?.value;
        const travelDate = document.getElementById('travelDate')?.value;
        const passengers = document.getElementById('passengers')?.value;

        if (fromStation && toStation && travelDate && passengers) {
            if (fromStation === toStation) {
                this.showToast('Departure and destination cannot be the same!', 'error');
                return;
            }

            this.showToast('Searching for available buses...', 'info');
            
            setTimeout(() => {
                this.renderAvailableBuses({fromStation, toStation, travelDate, passengers});
                this.showToast(`Found ${this.data.schedules.length} available buses`, 'success');
            }, 1000);
        } else {
            this.showToast('Please fill in all search fields', 'error');
        }
    }

    renderAvailableBuses(searchData = null) {
        const availableBuses = document.getElementById('availableBuses');
        if (!availableBuses) return;

        const buses = this.data.schedules.map(schedule => {
            const route = this.data.routes.find(r => r.id === schedule.routeId);
            const bus = this.data.buses.find(b => b.id === schedule.busId);
            
            return {
                ...schedule,
                route: route,
                bus: bus,
                arrivalTime: schedule.arrivalTime
            };
        });

        availableBuses.innerHTML = buses.length > 0 ? buses.map(busOption => `
            <div class="bus-option" onclick="app.selectBus('${busOption.id}')">
                <div class="bus-option-header">
                    <div class="bus-time">
                        <strong>${busOption.departureTime}</strong> → <strong>${busOption.arrivalTime}</strong>
                    </div>
                    <div class="bus-price">$${busOption.fare.toFixed(2)}</div>
                </div>
                <div class="bus-details">
                    <span><i class="fas fa-route"></i> ${busOption.route.name}</span>
                    <span><i class="fas fa-bus"></i> ${busOption.bus.model}</span>
                    <span><i class="fas fa-clock"></i> ${busOption.route.estimatedTime}</span>
                </div>
                <div class="seats-info">
                    <span class="seats-available">
                        <i class="fas fa-chair"></i> ${busOption.seatsAvailable} seats available
                    </span>
                    <button class="btn btn--primary btn--sm">
                        <i class="fas fa-ticket-alt"></i> Book Now
                    </button>
                </div>
            </div>
        `).join('') : `
            <div class="no-buses">
                <i class="fas fa-bus" style="font-size: 3rem; color: var(--color-text-secondary); margin-bottom: 16px;"></i>
                <p>No buses available for the selected route and date.</p>
                <p style="font-size: 14px; color: var(--color-text-secondary);">Try searching for a different date or route.</p>
            </div>
        `;
    }

    selectBus(scheduleId) {
        const schedule = this.data.schedules.find(s => s.id === scheduleId);
        if (schedule) {
            this.currentBooking = schedule;
            this.showModal('seatModal');
        }
    }

    renderSeatLayout() {
        const busLayout = document.getElementById('busLayout');
        if (!busLayout || !this.currentBooking) return;

        const bus = this.data.buses.find(b => b.id === this.currentBooking.busId);
        const rows = Math.ceil(bus.capacity / 4);
        
        let seatHTML = '';
        let seatNumber = 1;
        
        for (let row = 1; row <= rows; row++) {
            seatHTML += `<div class="seat-row">`;
            
            seatHTML += `<div style="display: flex; gap: 8px;">`;
            for (let i = 0; i < 2 && seatNumber <= bus.capacity; i++) {
                const seatId = `${String.fromCharCode(65 + i)}${row.toString().padStart(2, '0')}`;
                const isOccupied = Math.random() < 0.3;
                const seatClass = isOccupied ? 'occupied' : 'available';
                seatHTML += `
                    <div class="seat ${seatClass}" data-seat="${seatId}" onclick="app.toggleSeat('${seatId}', ${!isOccupied})">
                        ${seatId}
                    </div>
                `;
                seatNumber++;
            }
            seatHTML += `</div>`;
            
            seatHTML += `<div class="row-number">${row}</div>`;
            
            seatHTML += `<div style="display: flex; gap: 8px;">`;
            for (let i = 2; i < 4 && seatNumber <= bus.capacity; i++) {
                const seatId = `${String.fromCharCode(65 + i)}${row.toString().padStart(2, '0')}`;
                const isOccupied = Math.random() < 0.3;
                const seatClass = isOccupied ? 'occupied' : 'available';
                seatHTML += `
                    <div class="seat ${seatClass}" data-seat="${seatId}" onclick="app.toggleSeat('${seatId}', ${!isOccupied})">
                        ${seatId}
                    </div>
                `;
                seatNumber++;
            }
            seatHTML += `</div>`;
            
            seatHTML += `</div>`;
        }
        
        busLayout.innerHTML = seatHTML;
        this.updateBookingSummary();
    }

    toggleSeat(seatId, available) {
        if (!available) return;
        
        const seatElement = document.querySelector(`[data-seat="${seatId}"]`);
        if (!seatElement) return;
        
        if (this.selectedSeats.includes(seatId)) {
            this.selectedSeats = this.selectedSeats.filter(id => id !== seatId);
            seatElement.classList.remove('selected');
            seatElement.classList.add('available');
        } else {
            const passengerCount = parseInt(document.getElementById('passengers')?.value || 1);
            if (this.selectedSeats.length < passengerCount) {
                this.selectedSeats.push(seatId);
                seatElement.classList.remove('available');
                seatElement.classList.add('selected');
            } else {
                this.showToast(`You can only select ${passengerCount} seat(s)`, 'warning');
            }
        }
        
        this.updateBookingSummary();
    }

    updateBookingSummary() {
        const selectedSeatsSpan = document.getElementById('selectedSeats');
        const totalFareSpan = document.getElementById('totalFare');
        
        if (selectedSeatsSpan) {
            selectedSeatsSpan.textContent = this.selectedSeats.length > 0 ? this.selectedSeats.join(', ') : 'None';
        }
        
        if (totalFareSpan && this.currentBooking) {
            const totalFare = this.selectedSeats.length * this.currentBooking.fare;
            totalFareSpan.textContent = totalFare.toFixed(2);
        }
    }

    handleBookingConfirmation() {
        if (this.selectedSeats.length === 0) {
            this.showToast('Please select at least one seat', 'error');
            return;
        }
        
        if (!this.currentUser) {
            this.showToast('Please login to complete booking', 'error');
            this.hideModal('seatModal');
            this.showSection('authSection');
            return;
        }
        
        const totalFare = this.selectedSeats.length * this.currentBooking.fare;
        
        this.showToast('Processing your booking...', 'info');
        
        setTimeout(() => {
            const booking = {
                id: 'BK' + (this.data.bookings.length + 1).toString().padStart(3, '0'),
                passengerId: this.currentUser.id,
                scheduleId: this.currentBooking.id,
                seatNumbers: [...this.selectedSeats],
                bookingDate: new Date().toISOString().split('T')[0],
                status: 'Confirmed',
                totalFare: totalFare,
                paymentStatus: 'Paid'
            };
            
            this.data.bookings.push(booking);
            
            this.hideModal('seatModal');
            this.selectedSeats = [];
            this.currentBooking = null;
            
            this.showToast(`🎉 Booking confirmed! Total: $${totalFare.toFixed(2)}. E-ticket sent to your email.`, 'success');
        }, 2000);
    }

    // Additional helper methods
    initializeCalendar() {
        this.currentDate = new Date();
        this.renderScheduleCalendar();
    }

    navigateMonth(direction) {
        this.currentDate.setMonth(this.currentDate.getMonth() + direction);
        this.renderScheduleCalendar();
    }

    renderScheduleCalendar() {
        const calendarGrid = document.getElementById('calendarGrid');
        const currentMonth = document.getElementById('currentMonth');
        
        if (!calendarGrid || !currentMonth) return;

        const year = this.currentDate.getFullYear();
        const month = this.currentDate.getMonth();
        
        currentMonth.textContent = new Intl.DateTimeFormat('en-US', { 
            month: 'long', 
            year: 'numeric' 
        }).format(this.currentDate);

        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startingDay = firstDay.getDay();

        calendarGrid.innerHTML = '';

        const dayHeaders = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        dayHeaders.forEach(day => {
            const header = document.createElement('div');
            header.style.cssText = 'font-weight: bold; text-align: center; padding: 8px; color: var(--color-text-secondary); font-size: 12px;';
            header.textContent = day;
            calendarGrid.appendChild(header);
        });

        for (let i = 0; i < startingDay; i++) {
            const emptyDay = document.createElement('div');
            emptyDay.className = 'calendar-day empty';
            calendarGrid.appendChild(emptyDay);
        }

        const today = new Date();
        for (let day = 1; day <= daysInMonth; day++) {
            const dayElement = document.createElement('div');
            dayElement.className = 'calendar-day';
            dayElement.textContent = day;
            
            const currentDate = new Date(year, month, day);
            const hasSchedule = this.data.schedules.some(s => {
                const scheduleDate = new Date(s.date);
                return scheduleDate.toDateString() === currentDate.toDateString();
            });
            
            if (currentDate.toDateString() === today.toDateString()) {
                dayElement.classList.add('today');
            }
            
            if (hasSchedule) {
                dayElement.classList.add('has-schedule');
            }
            
            dayElement.addEventListener('click', () => {
                this.selectDate(currentDate);
            });
            
            calendarGrid.appendChild(dayElement);
        }
    }

    selectDate(date) {
        this.showToast(`Selected date: ${date.toDateString()}`, 'info');
    }

    renderTodaySchedules() {
        const todaySchedules = document.getElementById('todaySchedules');
        if (!todaySchedules) return;

        const schedules = this.data.schedules.filter(s => s.date === '2025-08-14');

        todaySchedules.innerHTML = schedules.length > 0 ? schedules.map(schedule => {
            const route = this.data.routes.find(r => r.id === schedule.routeId);
            const bus = this.data.buses.find(b => b.id === schedule.busId);
            
            return `
                <div class="schedule-item">
                    <div class="schedule-time">${schedule.departureTime}</div>
                    <div class="schedule-route">
                        <strong>${route.name}</strong><br>
                        <small>${bus.model} (${bus.plateNumber})</small>
                    </div>
                    <span class="schedule-status ${schedule.status.toLowerCase().replace(' ', '-')}">
                        ${schedule.status}
                    </span>
                </div>
            `;
        }).join('') : '<p style="text-align: center; color: var(--color-text-secondary); padding: 20px;">No schedules for today</p>';
    }

    handleAddSchedule() {
        const routeId = document.getElementById('scheduleRoute')?.value;
        const busId = document.getElementById('scheduleBus')?.value;
        const driverId = document.getElementById('scheduleDriver')?.value;
        const departureTime = document.getElementById('departureTime')?.value;
        const date = document.getElementById('scheduleDate')?.value;
        const fare = parseFloat(document.getElementById('fareAmount')?.value);

        if (routeId && busId && driverId && departureTime && date && fare) {
            const route = this.data.routes.find(r => r.id === routeId);
            const bus = this.data.buses.find(b => b.id === busId);
            
            const depTime = new Date(`2025-01-01 ${departureTime}`);
            const duration = parseInt(route.estimatedTime);
            depTime.setMinutes(depTime.getMinutes() + duration);
            const arrivalTime = depTime.toTimeString().slice(0, 5);

            const newSchedule = {
                id: 'SCH' + (this.data.schedules.length + 1).toString().padStart(3, '0'),
                routeId,
                busId,
                driverId,
                departureTime,
                arrivalTime,
                date,
                status: 'Scheduled',
                seatsBooked: 0,
                seatsAvailable: bus.capacity,
                fare
            };

            this.data.schedules.push(newSchedule);
            this.renderScheduleCalendar();
            this.renderTodaySchedules();
            this.hideModal('scheduleModal');
            document.getElementById('addScheduleForm')?.reset();
            this.showToast('Schedule created successfully!', 'success');
        } else {
            this.showToast('Please fill in all fields', 'error');
        }
    }

    renderSchedules() {
        // Implementation for rendering schedules
    }

    renderMaintenance() {
        const maintenanceList = document.getElementById('maintenanceList');
        const maintenanceAlerts = document.getElementById('maintenanceAlerts');

        if (maintenanceList) {
            maintenanceList.innerHTML = this.data.maintenance.map(item => {
                const bus = this.data.buses.find(b => b.id === item.busId);
                return `
                    <div class="maintenance-item">
                        <div class="maintenance-date">
                            ${new Date(item.scheduledDate).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric'
                            })}
                        </div>
                        <div class="maintenance-info">
                            <div class="maintenance-type">${item.type}</div>
                            <div class="maintenance-bus">${bus.plateNumber} - ${item.description}</div>
                        </div>
                        <div class="maintenance-cost">$${item.cost.toFixed(2)}</div>
                    </div>
                `;
            }).join('');
        }

        if (maintenanceAlerts) {
            const alerts = [
                {
                    type: 'warning',
                    message: 'Bus BUS001 due for service in 3 days',
                    action: 'Schedule Now'
                },
                {
                    type: 'critical',
                    message: 'Bus BUS002 overdue for inspection',
                    action: 'Urgent'
                }
            ];

            maintenanceAlerts.innerHTML = alerts.map(alert => `
                <div class="alert-item ${alert.type}">
                    <div class="alert-content">
                        <div class="alert-text">${alert.message}</div>
                        <button class="btn btn--outline btn--sm" style="margin-top: 8px;">
                            ${alert.action}
                        </button>
                    </div>
                </div>
            `).join('');
        }
    }

    updateReportChart() {
        if (!this.charts.reportsChart) {
            this.initializeReportsChart();
            return;
        }

        const reportType = document.getElementById('reportType')?.value || 'revenue';

        let data, labels, label;
        switch (reportType) {
            case 'revenue':
                labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
                data = [1200, 1900, 1500, 2200, 1800, 2400, 2100];
                label = 'Revenue ($)';
                break;
            case 'passenger':
                labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
                data = [85, 120, 95, 140, 110, 160, 135];
                label = 'Passengers';
                break;
            case 'route':
                labels = this.data.routes.map(r => r.name);
                data = [120, 85, 65];
                label = 'Daily Usage';
                break;
            case 'maintenance':
                labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
                data = [2400, 1800, 3200, 2100, 2800, 1900];
                label = 'Maintenance Costs ($)';
                break;
        }

        this.charts.reportsChart.data.labels = labels;
        this.charts.reportsChart.data.datasets[0].data = data;
        this.charts.reportsChart.data.datasets[0].label = label;
        this.charts.reportsChart.update();

        this.updateReportSummary();
    }

    updateReportSummary() {
        const reportSummary = document.getElementById('reportSummary');
        if (!reportSummary) return;

        const reportType = document.getElementById('reportType')?.value || 'revenue';
        
        let summaryData = [];
        
        switch (reportType) {
            case 'revenue':
                summaryData = [
                    { label: 'Total Revenue', value: '$13,100' },
                    { label: 'Average Daily', value: '$1,871' },
                    { label: 'Peak Day', value: 'Saturday' },
                    { label: 'Growth', value: '+12.5%' }
                ];
                break;
            case 'passenger':
                summaryData = [
                    { label: 'Total Passengers', value: '845' },
                    { label: 'Average Daily', value: '121' },
                    { label: 'Peak Day', value: 'Saturday' },
                    { label: 'Growth', value: '+8.3%' }
                ];
                break;
        }

        reportSummary.innerHTML = `
            <h4>Report Summary</h4>
            ${summaryData.map(item => `
                <div class="summary-item">
                    <span class="summary-label">${item.label}</span>
                    <span class="summary-value">${item.value}</span>
                </div>
            `).join('')}
        `;
    }

    generateReport() {
        this.showToast('Generating report...', 'info');
        setTimeout(() => {
            this.updateReportChart();
            this.showToast('Report generated successfully!', 'success');
        }, 1000);
    }

    exportReport() {
        this.showToast('Exporting report as PDF...', 'info');
        setTimeout(() => {
            this.showToast('Report exported successfully!', 'success');
        }, 1500);
    }

    populateFormOptions() {
        const routeSelects = document.querySelectorAll('#scheduleRoute, #routeFilter');
        routeSelects.forEach(select => {
            if (select) {
                const currentValue = select.value;
                select.innerHTML = '<option value="">Select route</option>' +
                    this.data.routes.map(route => 
                        `<option value="${route.id}" ${currentValue === route.id ? 'selected' : ''}>${route.name}</option>`
                    ).join('');
            }
        });

        const busSelect = document.getElementById('scheduleBus');
        if (busSelect) {
            busSelect.innerHTML = '<option value="">Select bus</option>' +
                this.data.buses.filter(bus => bus.status === 'Active').map(bus => 
                    `<option value="${bus.id}">${bus.plateNumber} (${bus.model})</option>`
                ).join('');
        }

        const driverSelect = document.getElementById('scheduleDriver');
        if (driverSelect) {
            driverSelect.innerHTML = '<option value="">Select driver</option>' +
                this.data.drivers.filter(driver => driver.status === 'On Duty').map(driver => 
                    `<option value="${driver.id}">${driver.name} (${driver.license})</option>`
                ).join('');
        }
    }

    startRealTimeUpdates() {
        setInterval(() => {
            if (this.currentSection === 'dashboardSection') {
                const stats = document.querySelectorAll('.stat-card h3');
                stats.forEach(stat => {
                    if (Math.random() < 0.3) {
                        const current = parseInt(stat.textContent.replace(/[^\d]/g, ''));
                        const change = Math.floor(Math.random() * 3) - 1;
                        if (current + change > 0) {
                            const newValue = current + change;
                            stat.textContent = stat.textContent.includes('$') ? `$${newValue.toLocaleString()}` : newValue.toLocaleString();
                            
                            stat.parentElement.parentElement.classList.add('pulse');
                            setTimeout(() => {
                                stat.parentElement.parentElement.classList.remove('pulse');
                            }, 1000);
                        }
                    }
                });
            }
        }, 30000);
    }

    showToast(message, type = 'info') {
        console.log(`${type.toUpperCase()}: ${message}`);
        
        const toast = document.getElementById('toast');
        if (!toast) return;

        const iconMap = {
            'success': 'fas fa-check-circle',
            'error': 'fas fa-exclamation-circle',
            'warning': 'fas fa-exclamation-triangle',
            'info': 'fas fa-info-circle'
        };

        toast.className = `toast ${type}`;
        const iconEl = toast.querySelector('.toast-icon');
        const messageEl = toast.querySelector('.toast-message');
        
        if (iconEl) iconEl.className = `toast-icon ${iconMap[type]}`;
        if (messageEl) messageEl.textContent = message;
        
        toast.classList.remove('hidden');
        
        setTimeout(() => {
            toast.classList.add('hidden');
        }, 4000);
    }

    saveUserData() {
        try {
            localStorage.setItem('transitpro_user', JSON.stringify(this.currentUser));
        } catch (error) {
            console.error('Error saving user data:', error);
        }
    }

    loadUserData() {
        try {
            const userData = localStorage.getItem('transitpro_user');
            if (userData) {
                this.currentUser = JSON.parse(userData);
            }
        } catch (error) {
            console.error('Error loading user data:', error);
        }
    }
}

// Global app instance
let app;

// Initialize the application
function initApp() {
    console.log('DOM loaded, initializing Bus Management System...');
    app = new BusManagementSystem();
    window.app = app;
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}