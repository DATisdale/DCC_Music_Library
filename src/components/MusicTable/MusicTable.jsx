import React from 'react';


const MusicTable = (props)=>{
    
    return(<table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Artist</th>
        <th scope="col">Album</th>
        <th scope="col">Song Title</th>
        <th scope="col">Genre</th>
        <th scope="col">Release Date</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td colspan="2">Larry the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>

    )

}




export default MusicTable 