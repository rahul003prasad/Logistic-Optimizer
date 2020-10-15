$(document).ready(function () {
    init();


    $("[id='vehicle-info-card']").click(function (e) {
        $('.vehicle-info-card').removeClass('vehicle-info-card-active');

        $(e.currentTarget).addClass('vehicle-info-card-active');
    });

    // //this code hides and shows the horizontal progress bar of parcel when user click view details button on vehicle info Card\
    $("[id='view-details']").click(function (e) {
        let el = $(e.currentTarget).parent().next();
        if (el.hasClass('hidden')) {
            el.removeClass('hidden');
        }
        else {
            el.addClass('hidden');
        }
    });

    // this code hides and show the status table when load status btn is clicked
    let f = -1;
    $('#load-status-btn').click(function () {
        if (f == -1)
            $('#load-status-btn').text("HIDE STATUS");
        else
            $('#load-status-btn').text("LOAD STATUS");

        f *= -1;
        $('#status-table').toggle(1000);
    });

    // this code hides the confirmation-box and shows the confirmed box when the user click yes button
    $('#yes').click(function () {
        $('#confirmation-box').hide();
        $('#confirmed-box').show();
    });


    // this code hides the confirmation-box and shows the rejected-message-box when the user click no button

    $('#no').click(function () {
        $('#confirmation-box').hide();
        $('#rejected-message-box').show();
    });

    // this code hides  the rejected-message-box and show rejection box when the user click submit button

    $('#submit-message').click(function () {
        $('#rejected-message-box').hide();
        $('#rejection-box').show();
    });




});


function init() {
    const baseUrl = 'http://localhost:5500/';
    const fileName = "vehicles.json";

    $.get(`${baseUrl}${fileName}`, (data, status) => {
        console.log(data, status);

        $.each(data, (key, value) => {
            $('.vehicle-details').append(`
                    <div class=" vehicle-info-card grid grid-cols-5 p-3 mb-4 text-grey font-bold  text-sm text-center" id="vehicle-info-card">
                    <div class="text-left">
                        <img src="./assets/icons/ic-parcel_box.png" alt="parcel-box" class="inline w-16"
                            style="vertical-align: middle">
                        Vehicle ${key}
                    </div>
                    <div class="relative pt-2">
                        <img src="./assets/icons/number_plate.svg" class="w-40 inline" alt="number_plate">
                        <p class=" number-plate text-black">${value.number} </p>
                    </div>
                    <div class="pt-4 text-center">
                        <p>${value.date}</p>
                    </div>
                    <div class="pt-3">
                        <img src="${value.status}" class="w-32 inline" alt="progress_tag">
                    </div>
                    <div class="pt-4 text-orange">
                        <p class="underline pointer " id="view-details"> View Details </p>
                    </div>


                    <div class="col-span-5 mt-6 horizontal-progress-bar flex flex-row  hidden text-left"
                        id="vehicle-horizontal-progress">

                        <!-- ARRIVAL MARK -->
                        <div class="arrival flex flex-row flex-no-wrap">
                            <span class="circle w-6 h-6 rounded-full bg-white inline-block flex-none"></span>
                            <p class="text-black ml-2 text-sm flex-none">
                                ARRIVAL
                                <br>
                                <span class="text-grey text-xs">Location A, Noida</span>
                                <br>
                                <span class="text-black text-xs -mt-3">7 July, 9:30 AM</span>
                            </p>
                        </div>
                        <!-- arrival progress bar -->
                        <div class="w-24 h-2 rounded-full bg-gray mt-2 relative -ml-6">
                            <!-- increase the width of this div to increase progress -->
                            <div class="absolute top-0 left-0  h-2 bg-green rounded-full">

                            </div>
                        </div>
                        <!-- arrival progress bar -->
                        <!-- ARRIVAL MARK -->


                        <!-- UNLOADING MARK -->
                        <div class="unloading flex flex-row ml-4 flex-no-wrap -ml-1">
                            <span class="circle w-6 h-6 rounded-full bg-white inline-block flex-none"></span>
                            <p class="text-black ml-2 text-sm flex-none">
                                UNLOADING
                                <br>
                                <span class="text-grey text-xs">Location B, Noida</span>
                                <br>
                                <span class="text-black text-xs -mt-3">7 July, 11:30 AM</span>
                            </p>
                        </div>
                        <!-- unloading progress bar -->
                        <div class="w-24 h-2 rounded-full bg-gray mt-2 relative">
                            <!-- increase the width of this div to increase progress -->
                            <div class="absolute top-0 left-0  h-2 bg-green rounded-full">

                            </div>
                        </div>
                        <!-- unloading progress bar -->
                        <!-- UNLOADING MARK -->


                        <!-- LOADING MARK -->
                        <div class="arrival flex flex-row  ml-4 flex-no-wrap -ml-1">
                            <span class="circle w-6 h-6 rounded-full bg-white inline-block flex-none"></span>
                            <p class="text-black ml-2 text-sm flex-none">
                                LOADING
                                <br>
                                <span class="text-grey text-xs">Location C, Noida</span>
                                <br>
                                <span class="text-black text-xs -mt-3">7 July, 12:30 AM</span>
                            </p>
                        </div>
                        <!-- LOADING progress bar -->
                        <div class="w-24 h-2 rounded-full bg-gray mt-2 relative -ml-4">
                            <!-- increase the width of this div to increase progress -->
                            <div class="absolute top-0 left-0  h-2 bg-green rounded-full">

                            </div>
                        </div>
                        <!-- LOADING progress bar -->
                        <!-- LOADING MARK -->

                        <!-- DEPARTURE MARK -->
                        <div class="arrival flex flex-row ml-4 flex-no-wrap -ml-1">
                            <span class="circle w-6 h-6 rounded-full bg-white inline-block flex-none"></span>
                            <p class="text-black ml-2 text-sm flex-none">
                                DEPARTURE
                                <br>
                                <span class="text-grey text-xs">Location D, Noida</span>
                                <br>
                                <span class="text-black text-xs -mt-3">7 July, 1:30 AM</span>
                            </p>
                        </div>
                        <!-- DEPARTURE MARK -->



                    </div>
                </div>
            `)
        })
    })
}