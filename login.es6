let login = (username, password) => {
    if(username !=='admin' || password !== 'pwd'){
        console.log('incorrect login');
    }
};

login('admin', 'wrongpwd');