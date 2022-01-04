import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LandingService {

  constructor(private http: HttpClient) { }

  //Install Better Comments in VScode


  //!About


  //?------------Industrial------------
  getIndustrial(){
    console.log('service');
    return this.http.get<any>("http://localhost:3000/industry");
  }

  //?-----------Knowledge--------------
  getKnowledge(){
    console.log('service');
    return this.http.get<any>("http://localhost:3000/knowledge");
  }

  //?----------Leaders-------------------
  getLeaders(){
    console.log('service');
    return this.http.get<any>("http://localhost:3000/staff/leaders");
  }

  //?-----------Patrons-------------------
  getPatrons(){
    console.log('service');
    return this.http.get<any>("http://localhost:3000/patrons");
  }

  //?-----------Teams---------------------
  getTeams(){
    console.log('service');
    return this.http.get<any>("http://localhost:3000/staff/team");
  }

  //!Courses

  //?---------------MainPage-----------------------
  getCourses(){
    console.log('service');
    return this.http.get<any>("http://localhost:3000/course");
  }
 
  //?-------------SinglePageCourse----------------
    getCourseId(id:any){
      console.log("service id course");
      return this.http.get<any>(`http://localhost:3000/course/courseSingle/${id}`);
    }

    regSubmit(course: any){
      console.log(course);
      return this.http.post("http://localhost:3000/registration/courseRegister",{course});
    }

  
  //!Offerings
  //?--Academic
  getMembers(){
    console.log('service');
    return this.http.get<any>("http://localhost:3000/academic");
  }

  //?Corporate
  formSubmit(corporate: any){
    console.log(corporate);
    return this.http.post("http://localhost:3000/CorporateApplication",{"members":corporate})
  }

 

  //!Testimonials
  getTestimonial(){
    console.log('service');
    return this.http.get<any>("http://localhost:3000/hometestimonials");
  }

  //!Testimonials
    // getCourseTestimonial(cname:any){
    //   console.log('service');
    //   return this.http.get<any>("http://localhost:3000/hometestimonials",{"c":cname});
    // }

  //!Events

  //?Header
  getEvent(){
    return this.http.get<any>("http://localhost:3000/events");
  }
  //?SingleEvent
  getEventId(id:any){
    console.log("service id event");
    return this.http.get<any>(`http://localhost:3000/events/${id}`);
    
  }

}
