import React from 'react';
import { Form, Input, Button } from 'antd';
import CustomLayout from '../Layout';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { editQualification,getQualificationbyID,deleteQualification } from '../../actions/qualification';

class QualiEdit extends React.Component {
  
  state = {
    qualification:{},
    quali:{},
    redirect : false,

    level: '',
    degree: '',
    branch: '',
    institution: '',
    university: '',
    class_obtained: '',
    title_of_thesis: '',
    research_area: '',
    faculty: '',
    department: '',
    viva: '',
    degree_type: '',
    durationfrom: '',
    durationto: '',
}

static propTypes = {
  editQualification: PropTypes.func.isRequired,
  qualification: PropTypes.object.isRequired,
  deleteQualification: PropTypes.func.isRequired,
}

onChange = e => {
  this.setState({
    [e.target.name]: e.target.value
  });
}

delete = (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;
    var conf = window.confirm("Do you want to delete ?");
    if (conf === true) {
      this.props.deleteQualification(id);
      window.open('/qualification',"_self");
      //history.push('/qualification');
    } 
}


onSubmit = e => {

    const id = this.props.match.params.id;
    e.preventDefault();
    if(this.state.degree_type === 'ug_pg')
    {
      const {level,degree,branch,institution,university,durationfrom,durationto,class_obtained,degree_type} = this.state;
  
      const quali = {level,degree,branch,institution,university,durationfrom,durationto,class_obtained,degree_type}
      
      //console.log(quali);
      this.props.editQualification(quali,id);
      //history.push('/qualification');
      window.open('/qualification',"_self");
      
    }
  
    else if(this.state.degree_type === 'research')
    {
      const {degree,title_of_thesis,research_area,faculty,department,institution,university,durationfrom,durationto,viva,degree_type} = this.state;
  
      const quali = {degree,title_of_thesis,research_area,faculty,department,institution,university,durationfrom,durationto,viva,degree_type}
      
      //console.log(quali);
      this.props.editQualification(quali,id);
      localStorage.removeItem('id');
      //history.push('/qualification');
      //this.props.history.push('/qualification');
      window.open('/qualification',"_self");
    }
  
    else{
    }
}


setStates(props)
{
  if(props.qualification.degree_type === 'ug_pg')
  {
    this.setState({
      level : props.qualification.level,
      degree : props.qualification.degree,
      branch : props.qualification.branch,
      institution : props.qualification.institution,
      university : props.qualification.university,
      duration : props.qualification.duration,
      class_obtained : props.qualification.class_obtained,
      degree_type : props.qualification.degree_type,
      durationfrom : props.qualification.durationfrom,
      durationto : props.qualification.durationto,
    })
  }
  else
  {
    this.setState({
      degree : props.qualification.degree,
      title_of_thesis : props.qualification.title_of_thesis,
      research_area : props.qualification.research_area,
      faculty : props.qualification.faculty,
      department : props.qualification.department,
      institution : props.qualification.institution,
      university : props.qualification.university,
      duration : props.qualification.duration,
      viva : props.qualification.viva,
      degree_type : props.qualification.degree_type,
      durationfrom : props.qualification.durationfrom,
      durationto : props.qualification.durationto,
    })
  }
}

componentDidMount()
{    
  const id = this.props.match.params.id;
  this.props.getQualificationbyID(id);
}


componentWillReceiveProps(props) {
    this.setStates(props);
    this.setState({
      quali : props.qualification
    })
}


  render() { 
    var quali = this.state.quali;
    var quali_len = Object.keys(quali).length

    const year = [];

    for (let i = 1950;i <= (new Date().getFullYear());i++) {
      year.push(<option key = {i} value = {i}>{i}</option>)
    }

    return (
      <div>
      <CustomLayout>
        {
        quali_len > 0 ? (
        <div>

        <div align="right">
          <Button type="danger" htmlType = "submit" onClick = {this.delete}>Delete</Button>
        </div>

        <Form onSubmit ={this.onSubmit}>
        {
        quali.degree_type === 'ug_pg' ? (
          <div key = {quali.id}>
          <Form.Item label="LEVEL">
          <select name="level" defaultValue={this.state.level} required onChange = {this.onChange}>
            <option disabled value="DEFAULT"> -- select an option -- </option> 
            <option value="UNDER GRADUATE">UNDER GRADUATE</option>
            <option value="POST GRADUATE">POST GRADUATE</option>
            <option value="DOCTORATE">DOCTORATE</option>
            <option value="DIPLOMA">DIPLOMA</option>
            <option value="POST GRADUATE DIPLOMA">POST GRADUATE DIPLOMA</option>
            <option value="CERTIFICATE">CERTIFICATE</option>
            <option value="RESEARCH DEGREE">RESEARCH DEGREE</option>
          </select>
          </Form.Item>
          <Form.Item label="DEGREE">
          <select name="degree" defaultValue={this.state.degree} required onChange = {this.onChange}>
            <option disabled value="DEFAULT"> -- select an option -- </option>
            <option value="AMIE.">AMIE.</option>
            <option value="ATSO I.">ATSO I.</option>
            <option value="B.A">B.A</option>
            <option value="B.Arch">B.Arch</option>
            <option value="B.B.A">B.B.A</option>
            <option value="B.B.M">B.B.M</option>
            <option value="B.C.A">B.C.A</option>
            <option value="B.Com">B.Com</option>
            <option value="B.E">B.E</option>
            <option value="B.Ed">B.Ed</option>
            <option value="B.G.L">B.G.L</option>
            <option value="B.L">B.L</option>
            <option value="B.Litt">B.Litt</option>
            <option value="B.P.Ed">B.P.Ed</option>
            <option value="B.Sc">B.Sc</option>
            <option value="B.T.P">B.T.P</option>
            <option value="B.Tech">B.Tech</option>
            <option value="Bsc(N)">Bsc(N)</option>
            <option value="C.A">C.A</option>
            <option value="D.C.A">D.C.A</option>
            <option value="D.C.A.D.D.">D.C.A.D.D.</option>
            <option value="D.C.D.">D.C.D.</option>
            <option value="D.C.E.">D.C.E.</option>
            <option value="D.C.P.">D.C.P.</option>
            <option value="D.C.P.S.">D.C.P.S.</option>
            <option value="D.E.T.">D.E.T.</option>
            <option value="D.G.T.">D.G.T.</option>
            <option value="D.I.T.">D.I.T.</option>
            <option value="D.M.E.">D.M.E.</option>
            <option value="D.N.C.">D.N.C.</option>
            <option value="D.W.T.">D.W.T.</option>
            <option value="DTP.">DTP.</option>
            <option value="M.A">M.A</option>
            <option value="M.Arch">M.Arch</option>
            <option value="M.B.A">M.B.A</option>
            <option value="M.C.A">M.C.A</option>
            <option value="M.C.L">M.C.L</option>
            <option value="M.Com">M.Com</option>
            <option value="M.E">M.E</option>
            <option value="M.Ed">M.Ed</option>
            <option value="M.L">M.L</option>
            <option value="M.L.I.S">M.L.I.S</option>
            <option value="M.P.Ed">M.P.Ed</option>
            <option value="M.Phil">M.Phil</option>
            <option value="M.S">M.S</option>
            <option value="M.S.W">M.S.W</option>
            <option value="M.Sc">M.Sc</option>
            <option value="M.T.P">M.T.P</option>
            <option value="M.Tech">M.Tech</option>
            <option value="P.G.D.C.A">P.G.D.C.A</option>
            <option value="P.G.D.L.L">P.G.D.L.L</option>
            <option value="P.G.D.O.R">P.G.D.O.R</option>
            <option value="P.G.D.S.L">P.G.D.S.L</option>
            <option value="P.G.I.P.L">P.G.I.P.L</option>
            <option value="PGDH">PGDH</option>
            <option value="PGDHE">PGDHE</option>
            <option value="PGDMM">PGDMM</option>
            <option value="PGDPM">PGDPM</option>
            <option value="Ph.D">Ph.D</option>
          </select>
          </Form.Item>
          <Form.Item label="BRANCH">
          <select name="branch" defaultValue={this.state.branch} required onChange = {this.onChange}>
            <option disabled value="DEFAULT"> -- select an option -- </option>
            <option value="AERONAUTICAL ENGINEERING">AERONAUTICAL ENGINEERING</option>
            <option value="AGRICULTURE AND IRRIGATION ENGG">AGRICULTURE AND IRRIGATION ENGG</option>
            <option value="APPAREL TECHNOLOGY">APPAREL TECHNOLOGY</option>
            <option value="ARCHITECTURE">ARCHITECTURE</option>
            <option value="BIO-TECHNOLOGY">BIO-TECHNOLOGY</option>
            <option value="CERAMIC TECHNOLOGY">CERAMIC TECHNOLOGY</option>
            <option value="CHEMICAL & ELECTRO-CHEMICAL ENGINEERING">CHEMICAL & ELECTRO-CHEMICAL ENGINEERING</option>
            <option value="CHEMICAL ENGINEERING">CHEMICAL ENGINEERING</option>
            <option value="CHEMISTRY">CHEMISTRY</option>
            <option value="CIVIL ENGINEERING">CIVIL ENGINEERING</option>
            <option value="COASTAL MANAGEMENT">COASTAL MANAGEMENT</option>
            <option value="COMPUTER SCIENCE">COMPUTER SCIENCE</option>
            <option value="COMPUTER SCIENCE AND ENGINEERING">COMPUTER SCIENCE AND ENGINEERING</option>
            <option value="ECONOMICS">ECONOMICS</option>
            <option value="ELECTRICAL AND ELECTRONICS ENGINEERING">ELECTRICAL AND ELECTRONICS ENGINEERING</option>
            <option value="ELECTRONICS AND COMMUNICATION ENGG">ELECTRONICS AND COMMUNICATION ENGG</option>
            <option value="ELECTRONICS AND INSTRUMENTATION ENGG">ELECTRONICS AND INSTRUMENTATION ENGG</option>
            <option value="EMBEDDED SYSTEM TECHNOLOGIES(ENGG)">EMBEDDED SYSTEM TECHNOLOGIES(ENGG)</option>
            <option value="ENERGY ENGINEERING">ENERGY ENGINEERING</option>
            <option value="ENGINEERING DESIGN">ENGINEERING DESIGN</option>
            <option value="ENGLISH">ENGLISH</option>
            <option value="ENVIRONMENTAL MANAGEMENT">ENVIRONMENTAL MANAGEMENT</option>
            <option value="FOOD TECHNOLOGY">FOOD TECHNOLOGY</option>
            <option value="GEO INFORMATICS(ENGINEERING)">GEO INFORMATICS(ENGINEERING)</option>
            <option value="GEOGRAPHY">GEOGRAPHY</option>
            <option value="HISTORY">HISTORY</option>
            <option value="HYDROLOGY & WATER MANAGEMENT">HYDROLOGY & WATER MANAGEMENT</option>
            <option value="INDUSTRY ENGINEERING">INDUSTRY ENGINEERING</option>
            <option value="INFORMATION TECHNOLOGY">INFORMATION TECHNOLOGY</option>
            <option value="INTEGRATED WATER RESOURCE MANAGEMENT">INTEGRATED WATER RESOURCE MANAGEMENT</option>
            <option value="INTERNAL COMBUSTION ENGINEERING">INTERNAL COMBUSTION ENGINEERING</option>
            <option value="IRRIGATION WATER MANAGEMENT">IRRIGATION WATER MANAGEMENT</option>
            <option value="LEATHER TECHNOLOGY">LEATHER TECHNOLOGY</option>
            <option value="MANUFACTURING ENGINEERING">MANUFACTURING ENGINEERING</option>
            <option value="MANUFACTURING SYSTEM MANAGEMENT(ENGG)">MANUFACTURING SYSTEM MANAGEMENT(ENGG)</option>
            <option value="MATERIAL SCIENCE AND ENGINEERING">MATERIAL SCIENCE AND ENGINEERING</option>
            <option value="MATHEMATICS">MATHEMATICS</option>
            <option value="MECHANICAL ENGINEERING">MECHANICAL ENGINEERING</option>
            <option value="MECHATRONICS(ENGINNERING)">MECHATRONICS(ENGINNERING)</option>
            <option value="MINING ENGINEERING">MINING ENGINEERING</option>
            <option value="Other">Other</option>
            <option value="PETROLEUM REFINING & PETRO-CHEMICAL">PETROLEUM REFINING & PETRO-CHEMICAL</option>
            <option value="PHARMACEUTICAL TECHNOLOGY">PHARMACEUTICAL TECHNOLOGY</option>
            <option value="PHYSICS">PHYSICS</option>
            <option value="PLANNING">PLANNING</option>
            <option value="POLITICAL ADMINISTRATION">POLITICAL ADMINISTRATION</option>
            <option value="POWER ELECTRONICS AND DRIVES">POWER ELECTRONICS AND DRIVES</option>
            <option value="POWER SYSTEMS ENGINEERING">POWER SYSTEMS ENGINEERING</option>
            <option value="PRINTING ENGINEERING">PRINTING ENGINEERING</option>
            <option value="PRODUCTION ENGINEERING">PRODUCTION ENGINEERING</option>
            <option value="REFINING & AIR-CONDITIONING ENGINEERING">REFINING & AIR-CONDITIONING ENGINEERING</option>
            <option value="REMOTE SENSING(ENGINEERING)">REMOTE SENSING(ENGINEERING)</option>
            <option value="RUBBER & PLASTIC TECHNOLOGY">RUBBER & PLASTIC TECHNOLOGY</option>
            <option value="STRUCTURAL ENGINEERING">STRUCTURAL ENGINEERING</option>
            <option value="TAMIL">TAMIL</option>
            <option value="TEXTILE TECHNOLOGY">TEXTILE TECHNOLOGY</option>
          </select></Form.Item>
          <Form.Item label="INSTITUTION">
            <Input  name = "institution" placeholder="Institution" required defaultValue = {quali.institution} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="UNIVERSITY">
            <Input name = "university" placeholder="University" required defaultValue = {quali.university} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="DURATION">
          <label>From</label> <select defaultValue = {this.state.durationfrom} required className = "selectClass" name="durationfrom" required onChange = {this.onChange}>
            <option disabled value="DEFAULT"> </option>
            {year}
          </select> {'\u00A0'}{'\u00A0'}
          <label>To</label> <select defaultValue = {this.state.durationto} required className = "selectClass" name="durationto" required  onChange = {this.onChange}>
            <option disabled value="DEFAULT"> </option>
            {year}
          </select></Form.Item>
          <Form.Item label="CLASS OBTAINED">
          <select name="class_obtained" required defaultValue={this.state.class_obtained} onChange = {this.onChange}>
              <option disabled value="DEFAULT"> -- select an option -- </option>
              <option value="First Class with Distinction">First Class with Distinction</option>
              <option value="Honors">Honors</option>
              <option value="First Class">First Class</option>
              <option value="Second Class">Second Class</option>
              <option value="Others">Others</option>
            </select></Form.Item>
          <Form.Item>
          <Button type="primary" htmlType = "submit">Submit</Button>
          </Form.Item>
        </div>
        ) : (
          <div key = {quali.id}>
          <Form.Item label="DEGREE">
          <select name="degree" required defaultValue={this.state.degree} onChange = {this.onChange}>
              <option disabled value="DEFAULT"> -- select an option -- </option>
              <option value="Ph.D">Ph.D</option>
              <option value="Postdoctral Research">Postdoctral Research</option>
              <option value="M.S (By Research)">M.S (By Research)</option>
              <option value="M.Phil">M.Phil</option>
            </select>
          </Form.Item>
          <Form.Item label="TITLE OF THESIS">
          <textarea name = "title_of_thesis" placeholder="Title of thesis" required defaultValue = {quali.title_of_thesis} onChange = {this.onChange}></textarea>
          </Form.Item>
          <Form.Item label="RESEARCH AREA">
          <Input name = "research_area" placeholder="Enter Your Research Area" required defaultValue = {quali.research_area} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="FACULTY">
            <Input name = "faculty" placeholder="Enter Faculty" required defaultValue = {quali.faculty} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="DEPARTMENT">
          <select name="department" defaultValue={this.state.department} onChange = {this.onChange}>
            <option disabled value="DEFAULT"> -- select an option -- </option>
            <option value="ADDITIONAL CONTROLLER OF EXAMINATION">ADDITIONAL CONTROLLER OF EXAMINATION</option>
            <option value="Administrative Office">Administrative Office</option>
            <option value="Alagappa College of Technology">Alagappa College of Technology</option>
            <option value="Anna University">Anna University</option>
            <option value="Anna University Sport Board">Anna University Sport Board</option>
            <option value="AU-FRG Institute for CAD/CAM">AU-FRG Institute for CAD/CAM</option>
            <option value="AU-KBC Research Centre">AU-KBC Research Centre</option>
            <option value="AU-RU Urban Energy Centre">AU-RU Urban Energy Centre</option>
            <option value="AU-TVS Centre for Quality Management">AU-TVS Centre for Quality Management</option>
            <option value="Audio Visual Research Centre">Audio Visual Research Centre</option>
            <option value="Boys Hostel">Boys Hostel</option>
            <option value="Building Technology Centre">Building Technology Centre</option>
            <option value="Centre for Academic Courses">Centre for Academic Courses</option>
            <option value="Centre for Admissions">Centre for Admissions</option>
            <option value="Centre for Aerospace Research">Centre for Aerospace Research</option>
            <option value="Centre for Affliation of Institutions">Centre for Affliation of Institutions</option>
            <option value="Centre for Alumni Affairs">Centre for Alumni Affairs</option>
            <option value="Centre for Applied Research in Indic Technologies">Centre for Applied Research in Indic Technologies</option>
            <option value="Centre for Bio Technology">Centre for Bio Technology</option>
            <option value="Centre for Climate Change and Adaptation Research">Centre for Climate Change and Adaptation Research</option>
            <option value="Centre for Development of Tamil in Engineering & Technology">Centre for Development of Tamil in Engineering & Technology</option>
            <option value="Centre for Disaster Mitigation and Management">Centre for Disaster Mitigation and Management</option>
            <option value="Centre for Distance Education">Centre for Distance Education</option>
            <option value="Centre for Empowerment of Women">Centre for Empowerment of Women</option>
            <option value="Centre for Enterpreneurship Development">Centre for Enterpreneurship Development</option>
            <option value="Centre for Entrance Examinations">Centre for Entrance Examinations</option>
            <option value="Centre for Environmantal Studies">Centre for Environmantal Studies</option>
            <option value="Centre for Faculty Development">Centre for Faculty Development</option>
            <option value="Centre for Food Technology">Centre for Food Technology</option>
            <option value="Centre for Geoscience and Engineering">Centre for Geoscience and Engineering</option>
            <option value="Centre for Human Settlements">Centre for Human Settlements</option>
            <option value="Centre for Intellectual Property Right and Trade Marks">Centre for Intellectual Property Right and Trade Marks</option>
            <option value="Centre for International Affairs">Centre for International Affairs</option>
            <option value="Centre for Medical Electronics">Centre for Medical Electronics</option>
            <option value="Centre for Nano Science and Technology">Centre for Nano Science and Technology</option>
            <option value="Centre for Natural and Renewable Sources of Energy">Centre for Natural and Renewable Sources of Energy</option>
            <option value="Centre for Professional Development Education">Centre for Professional Development Education</option>
            <option value="Centre for Research">Centre for Research</option>
            <option value="Centre for Technology Development and Transfer">Centre for Technology Development and Transfer</option>
            <option value="Centre for University Industry Collaboration">Centre for University Industry Collaboration</option>
            <option value="Centre for Water Resources">Centre for Water Resources</option>
            <option value="Centre with Potential for Excellence in Environment Science">Centre with Potential for Excellence in Environment Science</option>
            <option value="Chemical Engineering Workshop">Chemical Engineering Workshop</option>
            <option value="Civil/Electrical Minor Work Cells">Civil/Electrical Minor Work Cells</option>
            <option value="College of Engineering Guindy">College of Engineering Guindy</option>
            <option value="Computer Centre - MIT">Computer Centre - MIT</option>
            <option value="Controller of Examination - MIT">Controller of Examination - MIT</option>
            <option value="Crystal Growth Centre">Crystal Growth Centre</option>
            <option value="Department of Aerospace Engineering">Department of Aerospace Engineering</option>
            <option value="Department of Applied Science and Humanities">Department of Applied Science and Humanities</option>
            <option value="Department of Applied Science and Technology">Department of Applied Science and Technology</option>
            <option value="Department of Architecture">Department of Architecture</option>
            <option value="Department of Automobile Engineering">Department of Automobile Engineering</option>
            <option value="Department of Biotechnology">Department of Biotechnology</option>
            <option value="Department of Ceramic Technology">Department of Ceramic Technology</option>
            <option value="Department of Chemical Engineering">Department of Chemical Engineering</option>
            <option value="Department of Chemistry">Department of Chemistry</option>
            <option value="Department of Civil Engineering">Department of Civil Engineering</option>
            <option value="Department of Computer Science and Engineering">Department of Computer Science and Engineering</option>
            <option value="Department of Computer Technology">Department of Computer Technology</option>
            <option value="Department of Electrical and Electronics Engineering">Department of Electrical and Electronics Engineering</option>
            <option value="Department of Electronics and Communication Engineering">Department of Electronics and Communication Engineering</option>
            <option value="Department of Electronics Engineering">Department of Electronics Engineering</option>
            <option value="Department of English">Department of English</option>
            <option value="Department of Geology">Department of Geology</option>
            <option value="Depatment of Industrial Engineering">Depatment of Industrial Engineering</option>
            <option value="Department of Information Science and Technology">Department of Information Science and Technology</option>
            <option value="Department of Information Technology">Department of Information Technology</option>
            <option value="Department of Instrumentation Engineering">Department of Instrumentation Engineering</option>
            <option value="Department of Leather Technology">Department of Leather Technology</option>
            <option value="Department of Management Studies">Department of Management Studies</option>
            <option value="Department of Manufacturing Engineering">Department of Manufacturing Engineering</option>
            <option value="Department of Mathematics">Department of Mathematics</option>
            <option value="Department of Mechanical Engineering">Department of Mechanical Engineering</option>
            <option value="Department of Media Sciences">Department of Media Sciences</option>
            <option value="Department of Medical Physics">Department of Medical Physics</option>
            <option value="Department of Mining Engineering">Department of Mining Engineering</option>
            <option value="Department of Physics">Department of Physics</option>
            <option value="Department of Planning">Department of Planning</option>
            <option value="Department of Printing Technology">Department of Printing Technology</option>
            <option value="Department of Production Technolgy">Department of Production Technolgy</option>
            <option value="Depertment of Rubber and Plastic Technology">Depertment of Rubber and Plastic Technology</option>
            <option value="Department of Textile Technology">Department of Textile Technology</option>
            <option value="Distance Education Study Centre">Distance Education Study Centre</option>
            <option value="Division of Applied Science and Humanities">Division of Applied Science and Humanities</option>
            <option value="Division of Avonics Engineering">Division of Avonics Engineering</option>
            <option value="Division of Central Workshop">Division of Central Workshop</option>
            <option value="Division of Engineering Design">Division of Engineering Design</option>
            <option value="Division of High Voltage Engineering">Division of High Voltage Engineering</option>
            <option value="Division of Power System">Division of Power System</option>
            <option value="Division of Refrigeration and Air Conditioning">Division of Refrigeration and Air Conditioning</option>
            <option value="Division of Soil Mechanics and Foundation Management">Division of Soil Mechanics and Foundation Management</option>
            <option value="Division of Structural Engineering">Division of Structural Engineering</option>
            <option value="Division of Transportation Engineering">Division of Transportation Engineering</option>
            <option value="Division of Internal Combustion Engineering">Division of Internal Combustion Engineering</option>
            <option value="E-governance Project">E-governance Project</option>
            <option value="Educational Multimedia Research Centre">Educational Multimedia Research Centre</option>
            <option value="Estate Office">Estate Office</option>
            <option value="Estate Office - MIT">Estate Office - MIT</option>
            <option value="Faculty of Architecture and Planning">Faculty of Architecture and Planning</option>
            <option value="Faculty of Civil Engineering">Faculty of Civil Engineering</option>
            <option value="Faculty of Electrical and Electronic Engineering">Faculty of Electrical and Electronic Engineering</option>
            <option value="Faculty of Information and Communication Engineering">Faculty of Information and Communication Engineering</option>
            <option value="Faculty of Management Sciences">Faculty of Management Sciences</option>
            <option value="Faculty of Mechanical Engineering">Faculty of Mechanical Engineering</option>
            <option value="Faculty of Science and Humanities">Faculty of Science and Humanities</option>
            <option value="Faculty of Technology">Faculty of Technology</option>
            <option value="Girls Hostel">Girls Hostel</option>
            <option value="Health Care">Health Care</option>
            <option value="Institute of Energy Studies">Institute of Energy Studies</option>
            <option value="Institute of Ocean Management">Institute of Ocean Management</option>
            <option value="Institute of Remote Sensing">Institute of Remote Sensing</option>
            <option value="Internal Quality Assurance Cell">Internal Quality Assurance Cell</option>
            <option value="Knowledge Data Centre">Knowledge Data Centre</option>
            <option value="Library MIT">Library MIT</option>
            <option value="Logistic Centre">Logistic Centre</option>
            <option value="Madras Institute of Technology">Madras Institute of Technology</option>
            <option value="Maintenance Cell">Maintenance Cell</option>
            <option value="National Cadet Corps">National Cadet Corps</option>
            <option value="National Hub for Healthcare Instrumentation Development">National Hub for Healthcare Instrumentation Development</option>
            <option value="National Service Scheme">National Service Scheme</option>
            <option value="Office of the Controller of Examinations">Office of the Controller of Examinations</option>
            <option value="Ramanujan Computing Centre">Ramanujan Computing Centre</option>
            <option value="Registrar office">Registrar office</option>
            <option value="SC/ST Cell">SC/ST Cell</option>
            <option value="School of Architecture and Planning">School of Architecture and Planning</option>
            <option value="Sports Board">Sports Board</option>
            <option value="Student Affairs">Student Affairs</option>
            <option value="Syndicate">Syndicate</option>
            <option value="Training Centre for Career Advancement">Training Centre for Career Advancement</option>
            <option value="University Library">University Library</option>
            <option value="Workshop - MIT">Workshop - MIT</option>
            <option value="Youth Red Cross">Youth Red Cross</option>
            <option value="Others">Others</option>
          </select></Form.Item>
          <Form.Item label="INSTITUTION">
            <Input name = "institution" placeholder="Institution" required defaultValue = {quali.institution} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="UNIVERSITY">
            <Input name = "university" placeholder="University" required defaultValue = {quali.university} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="DURATION">
          <label>From</label> <select required className = "selectClass" name="durationfrom" required defaultValue={this.state.durationfrom} onChange = {this.onChange}>
            <option disabled value="DEFAULT"> </option>
            {year}
            </select> {'\u00A0'}{'\u00A0'}
            <label>To</label> <select required className = "selectClass" name="durationto" required defaultValue={this.state.durationto} onChange = {this.onChange}>
            <option disabled value="DEFAULT"> </option>
            {year}
          </select></Form.Item>
          <Form.Item label="VIVA">
            <Input name = "viva" placeholder="Viva" required defaultValue = {quali.viva} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item>
          <Button type="primary" htmlType = "submit">Submit</Button>
          </Form.Item>
          </div>
          ) 
        }
        </Form>
        </div>
        ) : (<h1></h1>)
        }
        </CustomLayout>
      </div>
    );
  }
}



const mapStateToProps = state => ({
    qualification: state.qualification.qualification_by_id
});

export default connect(mapStateToProps,{ editQualification,getQualificationbyID,deleteQualification })(QualiEdit);
    