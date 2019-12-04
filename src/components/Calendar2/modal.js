<!-- Modal -->
<div class="modal fade" :class="{modalBackground: $store.state.blur}" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <a href="#" class="ti-close" data-dismiss="modal" aria-label="Close"></a>
            <div class="modal-body row p-0">
                <!-- partea din stanga a modalului, cu titlu si descriere -->
                <div class="right col-xl-8 col-lg-7 p-5">
                    <!-- <h5 class="mb-0" style="font-size: 150%">{{eveniment["event name"]}}</h5> -->
                    <h5 class="mb-0" style="font-size: 150%">{{$store.state.modal.eventName}}</h5>
                    <br>
                    <p style="font-size:95%">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non ornare eros.
                        Ut pharetra ornare lorem, sit amet bibendum quam imperdiet ut. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Nullam non ornare eros. Ut pharetra ornare lorem,
                        sit amet bibendum quam imperdiet ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam non ornare eros.
                    </p>
                    <!-- <p>{{$store.state.indexStore}}</p> -->
                    <p style="font-size:95%">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non ornare eros. Ut pharetra ornare lorem,
                        sit amet bibendum quam imperdiet ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam non ornare eros. Ut pharetra ornare lorem, sit amet bibendum quam imperdiet ut.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non ornare eros.
                        Ut pharetra ornare lorem, sit amet bibendum quam imperdiet ut.
                    </p>
                </div>
                <!-- partea din dreapta a modalului -->
                <div class="right col-xl-4 col-lg-5 p-0" style="border-left: 1px solid #e5e5e5">
                    <!-- <img style="height:50%; width: 100%" :src=eveniment.image /> -->
                    <img style="height:50%; width: 100%" :src=$store.state.modal.image />
                    <!-- partea de jos din dreapta -->
                    <div style="background-color: #F7F7F7; height: 50%; margin-bottom:0px">
                        <div class="pt-5 pl-5" style="height:60%">
                            <p style="font-size: 96%">
                                <span class='ti-calendar mr-3'></span>
                                <span>
                                    <!-- primu rand e data, urmatoarele 3 randuri compun luna, daca incepe cu 0 sa ia a doua cifra (07=7) -->
                                    <!-- {{eveniment["event date"].split("-")[2]}} -->
                                    {{$store.state.modal.eventDay}}
                                    <!-- {{eveniment["event date"].split("-")[1].split("")[0]=="0"
                                    ? month[eveniment["event date"].split("-")[1].split("")[1]]
                                    : month[eveniment["event date"].split("-")[1]] }} -->
                                    {{$store.state.modal.eventMonth}}
                                    @
                                    <!-- {{eveniment["time interval"].split("-")[0]}} -->
                                    {{$store.state.modal.timeStart}}
                                </span>
                            </p>
                            <p style="font-size: 96%">
                                <span class="ti-time mr-3"></span>
                                <span>
                                    <!-- {{eveniment["time interval"]}} -->
                                    {{$store.state.modal.timeInterval}}
                                    <!-- {{Number(eveniment["time interval"].split("-")[1]) - Numbereveniment["time interval"].split("-")[0]}} -->
                                     <!-- - {{eveniment["time interval"]}}.split("-")[0] -->
                                </span>
                            </p>
                        </div>
                        <div class="pt-4 pl-5" style="height:40%">
                            <button class="btn btn-sm btn-success ml-1" type="button" name="button">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    <!-- Modal -->
