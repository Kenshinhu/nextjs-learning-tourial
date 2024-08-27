import Form from '../../../ui/invoices/create-form';
import Breadcrumbs  from '../../../ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';

export default async function Pages(){
    const customers = await fetchCustomers();
    return (
        <main>
            <Breadcrumbs breadcrumbs={[
                { label: 'Invoices', href: '/dashboard/invoices' },
                { label: 'Create', href: '/dashboard/invoices/create', active: true},
            ]} />
            <Form customers={customers} />
        </main>
    )
}