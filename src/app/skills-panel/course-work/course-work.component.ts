import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-work',
  templateUrl: './course-work.component.html',
  styleUrls: ['./course-work.component.css']
})
export class CourseWorkComponent implements OnInit {

  courses: Array<CourseItem> = [
    new CourseItem('CISC423 - Software Requirements', 'An integrated approach to discovering and documenting software requirements. Identification of stakeholders; customer, operator, analyst, and developer perspectives. Requirements elicitation. Transition from initial (informal) requirements to semi-formal and formal representations. Requirements analysis process; analysis patterns. Requirements specification techniques. Relation to architecture and user interface design; traceability of requirements.'),
    new CourseItem('CISC422 - Formal Methods in Software Engineering', 'Mathematical methods for describing software behaviour and structure. Topics include (but are not limited to) the following: Requirements specification. Module specification: axiomatic, algebraic, and trace specifications. Abstract models. Verification. Specification-based validation.'),
    new CourseItem('CISC332 - Database Management Systems', 'Data models: relational, entity-relationship. Relational query languages: relational algebra and SQL. Relational database design. Application interfaces and embedded SQL. Storage and indexing.'),
    new CourseItem('CISC335 - Computer Networks', 'Fundamental concepts in the design and implementation of computer communication networks, protocols, and applications. Overview of network architectures; applications; network programming interfaces (e.g., sockets); transport; congestion; routing and data link protocols; addressing; local area networks; wireless networks, mobility management; security.'),
    new CourseItem('CISC327 - Software Quality Assurance', 'Validation of software throughout the life cycle. Comparative effectiveness in defect removal of formal methods (proofs of correctness), inspection (walkthroughs and reviews), and testing (unit, integration, and system testing; white box versus black box).'),
    new CourseItem('CISC326 - Software and Game Architecture', 'An introduction to software architectural design through the application domain of game development. Abstractions and patterns of interactions and relationships among modules. Design recovery. Relationship to requirements and testing.'),
    new CourseItem('CISC365 - Algorithms', 'Principles of design, analysis and implementation of efficient algorithms. Case studies from a variety of areas illustrate divide and conquer methods, the greedy approach, branch and bound algorithms and dynamic programming.'),
    new CourseItem('CISC204 - Logic for Computing Science', 'Elements of mathematical logic with computing applications. Formal proof systems for propositional and predicate logic. Interpretations, validity, and satisfiability. Introduction to soundness, completeness and decidability.')
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}

class CourseItem {
  constructor(public title:string, public description:string) {
  }
}
