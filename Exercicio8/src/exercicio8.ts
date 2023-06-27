function fullName(firstName: string, lastName?: string ): void {
    console.log(firstName, lastName || '');
}

fullName('Ronaldinho');