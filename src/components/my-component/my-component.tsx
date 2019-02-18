import { Component, Prop, Watch } from '@stencil/core';
import { format } from '../../utils/utils';
import { Store, Action } from '@stencil/redux';
import { appSetFirstName, appSetMiddleName, appSetLastName } from '../../redux/actions';
import { store } from '../../redux/store';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css'
})
export class MyComponent {

  @Prop({ context: 'store' }) store: Store;

  @Prop({ mutable: true }) firstName: string;
  @Watch('firstName')
	firstNameWatcher(newValue: string) {
    if (this.appSetFirstName) {
      this.appSetFirstName(newValue);
    }
  }

  @Prop({ mutable: true }) middleName: string;
  @Watch('middleName')
	middleNameWatcher(newValue: string) {
    if (this.appSetMiddleName) {
      this.appSetMiddleName(newValue);
    }
  }

  @Prop({ mutable: true }) lastName: string;
  @Watch('lastName')
	lastNameWatcher(newValue: string) {
    if (this.appSetLastName) {
      this.appSetLastName(newValue);
    }
  }

  appSetFirstName: Action;
  appSetMiddleName: Action;
  appSetLastName: Action;

  unsubscribe!: any;

  componentWillLoad() {

    this.store.setStore(store);

    this.unsubscribe = this.store.mapStateToProps(this, state => {
      const {
        app: { firstName, middleName, lastName }
      } = state;

      return {
        firstName, middleName, lastName
      }
    });

    this.store.mapDispatchToProps(this, { appSetFirstName, appSetMiddleName, appSetLastName });
  }

  componentDidUnload() {
    this.unsubscribe();
  }

  private _getFullName(): string {
    return format(this.firstName, this.middleName, this.lastName);
  }

  render() {
    return <div>
              Hello, my full name is {this._getFullName()}
              <p>
                <input type="text" onInput={(e: any) => this.appSetFirstName(e.target.value)} value={this.firstName}/>
              </p>
              <p>
                <input type="text" onInput={(e: any) => this.appSetMiddleName(e.target.value)} value={this.middleName}/>
              </p>
              <p>
                <input type="text" onInput={(e: any) => this.appSetLastName(e.target.value)} value={this.lastName}/>
              </p>
            </div>
  }
}
