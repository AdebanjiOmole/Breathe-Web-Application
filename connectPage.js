componentDidMount() {
    const { match: {params: { provider }}, location: { search } } = this.props;
    const requestURL = `http://localhost:1337/auth/${provider}/callback${search}`;
   
   request(requestURL, { method: 'GET' })
     .then((response) => {
        auth.setToken(response.jwt, true);
        auth.setUserInfo(response.user, true);
        this.redirectUser('/');
     }).catch(err => {
        console.log(err.response.payload)
        this.redirectUser('/auth/login');
     });
  }
  
  redirectUser = (path) => {
    this.props.history.push(path);
  }