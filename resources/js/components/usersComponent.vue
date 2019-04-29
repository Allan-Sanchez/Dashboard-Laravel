<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">User Controler</h3>
                      <div class="card-tools">
                        <button class="btn btn-success" data-toggle="modal" data-target="#newUser">Add New <i class="fas fa-user-plus"></i></button>
                      </div>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body">
                        <table id="example2" class="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>User</th>
                                    <th>email</th>
                                    <th>Status</th>
                                    <th>Accion</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Allan Sanchez</td>
                                    <td>asanchez@gmail.com</td>
                                    <td>Approved</td>
                                    <td>
                                      <div class="btn-group" role="group">
                                        <button type="button" class="btn btn-info btn-sm"> <i class="fas fa-edit white"></i> </button>
                                        <button type="button" class="btn btn-danger mx-1 btn-sm"> <i class="fas fa-trash"></i> </button>
                                      </div>
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th>Rendering engine</th>
                                    <th>Browser</th>
                                    <th>Platform(s)</th>
                                    <th>Engine version</th>
                                    <th>CSS grade</th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    <!-- /.card-body -->
                </div>
                <!-- /.card -->
            </div>
        </div>
        
        <!-- Modal -->
        <div class="modal fade" id="newUser" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content modal-content-centered">
              <div class="modal-header">
                <h5 class="modal-title">Add User</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
              </div>
              <div class="modal-body">
                Body
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save</button>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
    export default {

    }

</script>
