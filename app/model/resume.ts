export namespace Resume{
    export interface retrive{
        name:string,
        personaldetails:[],
        summary:string,
        details:string,
        Education:string,
        clgname:string,
        cgpa: string,
        year:string,
        city:string,
        skils:string,
        skills:{
                  frontend:string,
                  feskills:[],
                  backend:string,
                  beskills:[],
                  db:string,
                  dbskills:[]
                },
        ProfessionalExperience:string,
        companyname:string,
        role:string,
        experience:string,
        workcity:string,
         projects:string,
        project:[{id:number,
                    title:string,
                    description:string
                }]
    }
}