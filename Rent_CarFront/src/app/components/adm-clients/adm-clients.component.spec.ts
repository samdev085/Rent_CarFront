import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmClientsComponent } from './adm-clients.component';

describe('AdmClientsComponent', () => {
  let component: AdmClientsComponent;
  let fixture: ComponentFixture<AdmClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmClientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
