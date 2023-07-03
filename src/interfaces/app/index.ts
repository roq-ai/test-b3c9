import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface AppInterface {
  id?: string;
  name: string;
  user_interface: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;

  organization?: OrganizationInterface;
  _count?: {};
}

export interface AppGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  user_interface?: string;
  organization_id?: string;
}
