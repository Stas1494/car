"use strict"
$(document).ready(function () {

    load_json_data('mark');

    function load_json_data(id, parent_id) {
        let html_code = '';
        $.getJSON('json/data.json', function (data) {

            html_code += '<option value="">Select ' + id + '</option>';
            $.each(data, function (key, value) {
                if (id == 'mark') {
                    if (value.parent_id == '0') {
                        html_code += '<option value="' + value.id + '">' + value.name + '</option>';
                    }
                }
                else {
                    if (value.parent_id == parent_id) {
                        html_code += '<option value="' + value.id + '">' + value.name + '</option>';
                    }
                }
            });
            $('#' + id).html(html_code);
        });

    }

    $(document).on('change', '#mark', function () {
        let mark_id = $(this).val();
        if (mark_id != '') {
            load_json_data('model', mark_id);
        }
        else {
            $('#model').html('<option value="">Select model</option>');
            $('#year').html('<option value="">Select year</option>');
        }
    });
    $(document).on('change', '#model', function () {
        let model_id = $(this).val();
        if (model_id != '') {
            load_json_data('year', model_id);
        }
        else {
            $('#year').html('<option value="">Select year</option>');
        }
    });



    $(function () {
        $("#datepicker").datepicker({
            minDate: 0
        });
    });

    $('#year').change(function (e) {
        $('.form__button').addClass('active');
        e.preventDefault();
    });


    $('#mark').change(function (e) {
        $('.block__mark').html(e.target.options[e.target.selectedIndex].text);
    })
    $('#model').change(function (e) {
        $('.block__model').html(e.target.options[e.target.selectedIndex].text);
    })
    $('#year').change(function (e) {
        $('.block__year').html(e.target.options[e.target.selectedIndex].text);
    })
    $('#datepicker').change(function (e) {
        $('.block__data').html(e.target.value);
        $('.popup').removeClass('open');
        $('.circle').removeClass('circle_play');
        $('.square__item_1').removeClass('square__item_1_play');
        $('.square__item_2').removeClass('square__item_2_play');
        $('.square__item_3').removeClass('square__item_3_play');
        $('.square__item_4').removeClass('square__item_4_play');
        $('.form__button').removeClass('active');
        $('.circle').addClass('enter');
        $('.block').addClass('enter');
    })

    $('.remov').click(function (e) {
        $('.circle').addClass('circle_play');
        $('.square__item_1').addClass('square__item_1_play');
        $('.square__item_2').addClass('square__item_2_play');
        $('.square__item_3').addClass('square__item_3_play');
        $('.square__item_4').addClass('square__item_4_play');
        $('.circle').removeClass('enter');
        $('.block').removeClass('enter');
        e.preventDefault();
    })

});

