import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaAndCopyrightsComponent } from './social-media-and-copyrights.component';

describe('SocialMediaAndCopyrightsComponent', () => {
  let component: SocialMediaAndCopyrightsComponent;
  let fixture: ComponentFixture<SocialMediaAndCopyrightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialMediaAndCopyrightsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SocialMediaAndCopyrightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
