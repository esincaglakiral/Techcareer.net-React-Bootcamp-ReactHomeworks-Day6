import { data } from "../Data/Data";
// import { useState } from 'react';

//aşağıdaki ilk çalışmam, live serverda bir form yapısı oluşturup, oraya girdiğimiz bilgieri var olan datanın altına yeni bir satır olarak eklemek içindir. 
//Kod çalışmakta olup yalnızca city kısmı çalışmamaktadır. ayrıca aynı idye sahip olsa da ekleme yapıyor. bu çalışma da App.js dosyasında yalnıca <SuppliersList /> bulunmaktaydı


  const SuppliersList = () => {

    //  const [suppliers, setSupplier] = useState(data);
    //  const [addFormData, setAddFormData] = useState({
    //      id: '',
    //      companyName: '',
    //      contactName: '',
    //      city: ''
    //  })

    //  const handleAddFormChange= (event) => {
    //      event.preventDefault();

    //      const fieldName = event.target.getAttribute('name');
    //      const fieldValue = event.target.value;

    //      const newFormData = { ...addFormData};
    //      newFormData[fieldName] = fieldValue;

    //      setAddFormData(newFormData);
    //  };

    //  const handleAddFormSubmit = (event) => {
    //      event.preventDefault();

    //      const newSupplier = {
    //          id: addFormData.id,
    //          companyName: addFormData.companyName,
    //          contactName: addFormData.contactName,
    //          cityName: addFormData.address?.city

    //      };

    //  const newSuppliers = [...suppliers, newSupplier];
    //  setSupplier(newSuppliers);
    //  };

     return (

         <div>
             <table>
                 <thead>
                     <tr>
                         <th>ID</th>
                         <th>Company Name</th>
                         <th>ContactName</th>
                         <th>City</th>
                     </tr>
                 </thead>
                 <tbody>
                     {
                        data.map(supplier => (
                             <tr key={supplier.id}>
                                 <td>{supplier.id}</td>
                                 <td>{supplier.companyName}</td>
                                 <td>{supplier.contactName}</td>
                                 <td>{supplier.address?.city}</td>
                             </tr>
                         ))
                     }
                 </tbody>
             </table >

       </div>

//               <h2> Add a Data</h2>
//              <form onSubmit={handleAddFormSubmit}>

//              <input
//                      type="number"
//                      name="id"
//                      required="required"
//                      placeholder="Enter a id..."
//                      onChange={handleAddFormChange} />

//                  <input
//                      type="text"
//                      name="companyName"
//                      required="required"
//                      placeholder="Enter a company name..."
//                      onChange={handleAddFormChange} />

//                  <input
//                      type="text"
//                      name="contactName"
//                      required="required"
//                      placeholder="Enter a contact name..."
//                      onChange={handleAddFormChange} />

//                  <input
//                      type = "text"
//                      name="city"
//                      required="required"
//                      placeholder="Enter a city..." 
//                      onChange={handleAddFormChange} />
                    

//                  <button type="submit">Add</button>

//              </form> }
//          </div>



      )

  }
   export default SuppliersList