import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-main-gallery-block',
  templateUrl: './main-gallery-block.component.html',
  styleUrls: ['./main-gallery-block.component.css']
})
export class MainGalleryBlockComponent {
  @Input() userPassword = '';
  password = 'a';
  showForm = false;
  userImgTitle = '';
  userImgUrl = '';

  images = [
    {imgTitle: 'nature', imgUrl: 'https://i.pinimg.com/564x/86/9a/0d/869a0d6badfacfbc4fd2f923eeb5d3d7.jpg'},
    {imgTitle: 'nature', imgUrl: 'https://i.pinimg.com/564x/98/82/33/98823388decc59ceed39362cdf54d68b.jpg'},
    {imgTitle: 'nature', imgUrl: 'https://i.pinimg.com/564x/90/a1/26/90a126b038c0dfb4216815aead42cb5e.jpg'},
  ];

  checkingUserPassword(event: Event) {
    const target = <HTMLInputElement>event.target;
    this.userPassword = target.value;
  }

  checkingUserImgTitle(event: Event) {
    const target = <HTMLInputElement>event.target;
    this.userImgTitle = target.value;
  }

  checkingUserImgUrl(event: Event) {
    const target = <HTMLInputElement>event.target;
    this.userImgUrl = target.value;
  }

  onSubmitPassword(event: Event) {
    event.preventDefault();
    if (this.userPassword === this.password) {
      this.showForm = true;
    }
    this.resetForm();
  }

  onSubmitImg(event: Event) {
    event.preventDefault();
    this.images.push({
      imgTitle: this.userImgTitle,
      imgUrl: this.userImgUrl,
    })
    this.resetImgForm();
  }

  resetImgForm() {
    this.userImgUrl = '';
    this.userImgTitle = '';
  }

  passwordFormIsEmpty() {
    return this.userPassword === '';
  }

  imgFormIsEmpty() {
    return this.userImgTitle === '' || this.userImgUrl === '';
  }

  resetForm() {
    this.userPassword = '';
  }

}
