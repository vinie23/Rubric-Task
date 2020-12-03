import angular from 'angular';

class HttpService {
  static $inject = ['$http','$q']

  constructor($http, $q) {
    this.$http = $http;
    this.$q = $q;
  }

  getResults() {
    return this.$http.get("/twubric.json")
//      .then(function(response) {
//        console.log("response", response)
//      });
  }
}


export default HttpService;