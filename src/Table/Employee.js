import React, { Component } from 'react'
import Employeelist from './Employeelist'
export class Employee extends Component {
  Employees=
   
    [{"id":1,"first_name":"Loria","last_name":"Todarello","email":"ltodarello0@moonfruit.com","gender":"Female"},
    {"id":2,"first_name":"Ardeen","last_name":"Lincey","email":"alincey1@shutterfly.com","gender":"Female"},
    {"id":3,"first_name":"Albie","last_name":"Tinston","email":"atinston2@gov.uk","gender":"Male"},
    {"id":4,"first_name":"Franchot","last_name":"Askem","email":"faskem3@webnode.com","gender":"Male"},
    {"id":5,"first_name":"Glory","last_name":"McIlhone","email":"gmcilhone4@goodreads.com","gender":"Female"},
    {"id":6,"first_name":"Deloris","last_name":"Iozefovich","email":"diozefovich5@examiner.com","gender":"Female"},
    {"id":7,"first_name":"Patrizius","last_name":"Skinley","email":"pskinley6@liveinternet.ru","gender":"Male"},
    {"id":8,"first_name":"Caitrin","last_name":"Gilders","email":"cgilders7@bravesites.com","gender":"Female"},
    {"id":9,"first_name":"Philippe","last_name":"Syne","email":"psyne8@epa.gov","gender":"Female"},
    {"id":10,"first_name":"Clara","last_name":"Dunlea","email":"cdunlea9@desdev.cn","gender":"Female"},
    {"id":11,"first_name":"Lilian","last_name":"Ridgeway","email":"lridgewaya@nydailynews.com","gender":"Female"},
    {"id":12,"first_name":"Rosamund","last_name":"Iggalden","email":"riggaldenb@oracle.com","gender":"Female"},
    {"id":13,"first_name":"Paxton","last_name":"Cayet","email":"pcayetc@msu.edu","gender":"Male"},
    {"id":14,"first_name":"Janet","last_name":"Andress","email":"jandressd@accuweather.com","gender":"Female"},
    {"id":15,"first_name":"Ginevra","last_name":"Willgoose","email":"gwillgoosee@google.co.jp","gender":"Female"},
    {"id":16,"first_name":"Melina","last_name":"Spencock","email":"mspencockf@yandex.ru","gender":"Female"},
    {"id":17,"first_name":"Sanderson","last_name":"Flowitt","email":"sflowittg@naver.com","gender":"Male"},
    {"id":18,"first_name":"Evin","last_name":"Hugk","email":"ehugkh@wikipedia.org","gender":"Male"},
    {"id":19,"first_name":"Enrique","last_name":"Moreno","email":"emorenoi@chronoengine.com","gender":"Male"},
    {"id":20,"first_name":"Chrysler","last_name":"Strowger","email":"cstrowgerj@intel.com","gender":"Female"},]
  render() {
    return (
      <div>
        <Employeelist emp={this.Employees}/>
      </div>
    )
  }
}

export default Employee