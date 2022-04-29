function engineer(engineer) {
    return `
    <div class="card employee-card">
    <div class="card-header bg-primary">
        <h2 class="card-title text-white">${engineer.name}</h2>
        <h3 class="card-title text-white justify-content-center"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item bg-light"><em>ID:</em>${engineer.id}</li>
            <li class="list-group-item bg-light"><em>Email:</em> <a href="mailto:${engineer.email}">${engineer.email}</a></li>
            <li class="list-group-item bg-light"><em>GitHub:</em> <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
        </ul>
    </div>
</div>`
};

module.exports = engineer;