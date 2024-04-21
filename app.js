// Sample data for demonstration
const opportunities = [
    { id: 1, title: 'Opportunity 1', status: 'open' },
    { id: 2, title: 'Opportunity 2', status: 'in_progress' },
    { id: 3, title: 'Opportunity 3', status: 'closed' }
];

// Function to generate cards for each opportunity
function generateOpportunityCards() {
    const main = document.getElementById('main');
    main.innerHTML = '';
    opportunities.forEach(opportunity => {
        const card = document.createElement('div');
        card.classList.add('card');
        const status = opportunity.status === 'open' ? 'Em Aberto' : opportunity.status === 'in_progress' ? 'Em Progresso' : 'Fechada';
        card.innerHTML = `
            <div class="card-header">${opportunity.title}</div>
            <div class="card-body">Status: ${status}</div>
        `;
        main.appendChild(card);
    });
}

// Generate opportunity cards on page load
generateOpportunityCards();
