import './scss/style.scss';
import 'bootstrap';
import jQuery from 'jquery';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

if (document.getElementById('editor1')) {
    ClassicEditor.create( document.querySelector( '#editor1' ));
}
    
jQuery('#year').text(new Date().getFullYear());