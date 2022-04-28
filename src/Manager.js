function manager(manager) {
    return `
    <div class="card employee-card">
    <div class="card-header bg-primary">
        <h2 class="card-title text-white">${manager.name}</h2>
        <h3 class="card-title text-white justify-content-center"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item bg-light"><em>ID:</em> ${manager.id}</li>
            <li class="list-group-item bg-light"><em>Email:</em> <a href="email:${manager.email}">${manager.email}</a></li>
            <li class="list-group-item bg-light"><em>Office number:</em> ${manager.empOfficeCountNumber}</li>
        </ul>
    </div>
</div>`
}

module.exports = manager;