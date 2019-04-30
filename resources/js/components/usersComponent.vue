<template>
    <div class="container mt-4">
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
                                    <th>ID</th>
                                    <th>User</th>
                                    <th>email</th>
                                    <th>Status</th>
                                    <th>Accion</th>
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
              <form action="" @submit.prevent="createUser">
              <div class="modal-body">
                <!-- name -->
                <div class="form-group">
                  <input v-model="form.name" type="text" name="name" placeholder="name" required
                    class="form-control" :class="{ 'is-invalid': form.errors.has('name') }">
                  <has-error :form="form" field="name"></has-error>
                </div>
                <!-- email -->
                <div class="form-group">
                  <input v-model="form.email" type="email" name="email" placeholder="email" required
                    class="form-control" :class="{ 'is-invalid': form.errors.has('email') }">
                  <has-error :form="form" field="email"></has-error>
                </div>
                <!-- password -->
                <div class="form-group">
                  <input v-model="form.password" type="password" name="password" placeholder="password" required
                    class="form-control" :class="{ 'is-invalid': form.errors.has('password') }">
                  <has-error :form="form" field="password"></has-error>
                </div>
                <!-- type -->
                <div class="form-group">
                  <select name="type" v-model="form.type" class="form-control" required
                  :class="{ 'is-invalid': form.errors.has('type') }">
                    <option value="">Select User Role</option>
                    <option value="admin">Admin</option>
                    <option value="user">Standard user</option>
                  </select>
                  <has-error :form="form" field="type"></has-error>
                </div>
                <!-- bio -->
                <div class="form-group">
                  <textarea name="bio" cols="3" rows="3" v-model="form.bio" placeholder="short bio for user (optional)"
                    class="form-control" :class="{ 'is-invalid': form.errors.has('bio') }">
                    </textarea>

                  <has-error :form="form" field="bio"></has-error>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-primary">Save</button>
              </div>
              </form>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
    export default {
      data() {
        return {
          form: new Form({
            name:null,
            email:null,
            password:null,
            type:'',
            bio:null,
            photo:null
          }),
        }
      },
      methods: {
        createUser(){
          this.form.post('api/user');
        }
      },

    }

</script>
