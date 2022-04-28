function intern(intern) {
    return `
    <div class="card employee-card">
    <div class="card-header bg-primary">
        <h2 class="card-title text-white">${intern.name}</h2>
        <h3 class="card-title text-white justify-content-center"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item bg-light"><em>ID:</em> {{ id }}</li>
            <li class="list-group-item bg-light"><em>Email:</em> <a href="email:${intern.email}">${intern.email}</a></li>
            <li class="list-group-item bg-light"><em>School:</em> ${intern.school}</li>
        </ul>
    </div>
</div>`
};

module.exports = intern;