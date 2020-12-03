class HomeController {
  static $inject = ['HttpService']

    constructor(HttpService) 
    {
        this.sortvalue = 'name';
        this.sortOrder = false;
        this.service = HttpService;
        this.maxDate = new Date();
        this.minDate = new Date();
    }
    $onInit() {
        let _this = this;
        this.service.getResults().then(function(response) {
            _this.users = response.data;
        });
    }
    sortData(sortopt)
    {
        if(this.sortvalue!=sortopt)
        {
            this.sortOrder = false;
        }else{
            this.sortOrder = !this.sortOrder;
        }
        this.sortvalue = sortopt;
    }
  
    datechange()
    {
        this.minDate = this.startDate;
    }
    
    filterBydate()
    {
        if(!this.startDate)
        {
            alert('Select Start Date first');
        }else{
            this.filterstartdate = Math.round(this.startDate.getTime()/1000);
            this.filterenddate = Math.round(this.endDate.getTime()/1000);
            this.sortvalue = 'join_date';
        }
    }
    
    remove(index)
    {   
        if(confirm('Do you really want to remove?'))
        this.users.splice(index, 1); 
    }
}

export default HomeController;
