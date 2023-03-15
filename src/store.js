import { reactive } from 'vue'
const store = reactive({
    telephone: '+1 (305) 1234-5678',
    email: 'hello@example.com',
    address: 'Main Avenue, 987',
    services: [
        {
            icon: 'fa-solid fa-diagram-project',
            title: 'Audit & Assurance',
            lorem: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        },
        {
            icon: 'fa-solid fa-briefcase',
            title: 'Financial Advisory',
            lorem: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        },
        {
            icon: 'fa-solid fa-chart-simple',
            title: 'Analytics and M&A',
            lorem: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        },
        {
            icon: 'fa-solid fa-plane',
            title: 'Middle Marketing',
            lorem: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        },
        {
            icon: 'fa-solid fa-earth-americas',
            title: 'Legal Consulting',
            lorem: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        },
        {
            icon: 'fa-solid fa-inbox',
            title: 'Regulatory Risk',
            lorem: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        }
    ],
})

export default store