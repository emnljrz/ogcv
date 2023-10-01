import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	public title = 'resume';
	public cursorShow = false;

	public workInfos: any = [];
	public educationInfos: any = [];
	public skillInfos: any = [];

	constructor() { }

	ngOnInit(): void {
		
		
		this.workInfos = [
			{
				company: 'Cloudstaff Inc.',
				country: 'Philippines',
				duration: `Feb '22 → Present`,
				positions: [
					{
						title: 'Software Engineer II',
						tasks: [
							`Work includes JOBS (Cloudstaff's job portal) & Cloudstaff's internal systems.`,
							`Analyzing and modifying existing software as well as designing, implementing and integrating new technology, constructing and testing end-user applications that meet user needs`
						]
					}
				],
			},
			{
				company: 'TSP Marine Industries Inc.',
				country: 'Philippines',
				duration: `Sep '15 → Feb '22`,
				positions: [
					{
						title: 'Lead Programmer',
						tasks: [
							`Responsible for leading the company’s internal software development (Timekeeping Management, Vessel Monitoring System, Incentives System, Logistics Information System).`,
							`Responsible for maintaining & tuning of databases, creating and maintaining T-SQL queries, performing SQL code reviews and walk-troughs.`,
							`Responsible for maintaining the computer systems and network.`,
							`Creating multimedia  arts for the company's usage.`
						]
					}
				],
			},
			{
				company: 'Freelance',
				country: 'Philippines',
				duration: `Nov '13 → Sep '15`,
				positions: [
					{
						title: 'Web Developer, Photographer, Videographer, Multimedia Editor',
						tasks: [
							`Create small to medium website and web application projects, and create mock-up designs for static websites and web applications.`,
							`Events Photographer or Videographer.`,
							`Multimedia Editor.`,
						]
					}
				],
			},
			{
				company: 'ZDH Consulting',
				country: 'Philippines',
				duration: `Jun '13 → Nov '13`,
				positions: [
					{
						title: 'Web Developer and Designer',
						tasks: [
							`Create small to medium website and web application, and create mock-up designs for both static and dynamic websites.`,
						]
					}
				],
			},
			{
				company: 'Callbox Sales & Marketing',
				country: 'Philippines',
				duration: `Nov '12 → Feb '13`,
				positions: [
					{
						title: 'Web Developer and Designer',
						tasks: [
							`Responsible for several websites SEO.`,
							`Generate leads for sales and marketing department.`
						]
					}
				],
			}
		]

		this.educationInfos = [
			{
				degree: 'Masters in Information Technology',
				school: 'Notre Dame of Dadiangas University',
				country: 'Philippines',
				duration: `Jun '19 - May '23`,
				projects: [
					{
						type: 'Capstone project',
						title: 'Radio Frequency Identification for Self-Service Point of Sale Kiosk',
						descriptions: [
							`Prototype project involving integration of hardware (microprocessor, rfid tag, and rfid reader) and software (mobile dashboard, API, and Database).`
						]
					}
				]
			},
			{
				degree: 'Bachelor of Science in Information Technology',
				school: 'STI College - General Santos City',
				country: 'Philippines',
				duration: `Jun '09 - Mar '13`,
				projects: [
					{
						type: 'Thesis',
						title: `Computer Virus and its Behavior`,
						descriptions: []
					}
				]
			}
		]

		this.skillInfos = [
			{
				category: 'Technical Skills',
				skills: [
					{
						name: 'Backend',
						rating: this.barSlice(70)
					},
					{
						name: 'API',
						rating: this.barSlice(80)
					},
					{
						name: 'Frontend',
						rating: this.barSlice(70)
					},
					{
						name: 'Programming Language',
						rating: this.barSlice(0),
						subSkills: [
							{
								name: 'C#',
								rating: this.barSlice(70),
								textRating: this.textRating(60)
							},
							{
								name: 'Javascript',
								rating: this.barSlice(85),
								textRating: this.textRating(85)
							},
							{
								name: 'SQL (MSSQL, MySQL, PostgresSQL)',
								rating: this.barSlice(90),
								textRating: this.textRating(90)
							},
							{
								name: 'NoSQL (MonggoDB, Redis)',
								rating: this.barSlice(40),
								textRating: this.textRating(30)
							},
							{
								name: 'Python',
								rating: this.barSlice(60),
								textRating: this.textRating(60)
							},
							{
								name: 'HTML',
								rating: this.barSlice(80),
								textRating: this.textRating(80)
							},
							{
								name: 'CSS',
								rating: this.barSlice(50),
								textRating: this.textRating(50)
							},
							{
								name: 'PHP',
								rating: this.barSlice(30),
								textRating: this.textRating(30)
							},
							{
								name: 'Java',
								rating: this.barSlice(50),
								textRating: this.textRating(50)
							},
							{
								name: 'Dart',
								rating: this.barSlice(60),
								textRating: this.textRating(30)
							},
						]
					},
					{
						name: 'Framework',
						rating: this.barSlice(0),
						subSkills: [
							{
								name: `.Net`,
								rating: this.barSlice(60),
								textRating: this.textRating(60)
							},
							{
								name: `Entity Framework`,
								rating: this.barSlice(50),
								textRating: this.textRating(60)
							},
							{
								name: `Angular`,
								rating: this.barSlice(70),
								textRating: this.textRating(70)
							},
							{
								name: `FastAPI`,
								rating: this.barSlice(60),
								textRating: this.textRating(60)
							},
						]
					},
					{
						name: 'Multimedia Editor'
					}
				]
			},
			{
				category: 'General Skills',
				skills: [
					{
						name: 'Communication',
						rating: this.barSlice(80)
					},
					{
						name: 'Teamwork',
						rating: this.barSlice(80)
					},
					{
						name: 'Problem solving',
						rating: this.barSlice(80)
					},
					{
						name: 'Time management',
						rating: this.barSlice(80)
					},
					{
						name: 'Resilency',
						rating: this.barSlice(80)
					},
					{
						name: 'Eagerness to learn',
						rating: this.barSlice(90)
					},
				]
			}
		]
	}

	private barSlice(num: number): string {
		if (num <= 0 || num > 100) return ''

		const solid = Math.round((num / 100) * 10);
		const sharp = 10 - solid;

		let solidRender = '';
		let sharpRender = '';
		for (let i = 0; i < solid; i++) solidRender += '█';
		for (let i = 0; i < sharp; i++) sharpRender += '#';

		return `[${solidRender.concat(sharpRender)}]` 
	}

	private textRating(num: number): string {
		if (num <= 0 || num > 100) return ''

		if (num > 0 && num <= 34) return 'Basic'
		if (num > 35 && num <= 67) return 'Itermediate'
		if (num > 68 && num <= 100) return 'Advance'

		return ''
	}
}

