import React from 'react';

type MyRoleSectionProps = {
  role: string | null | undefined;
};

const MyRoleSection: React.FC<MyRoleSectionProps> = ({ role }) => {
  if (!role) {
    return null;
  }

  return (
    <section>
      <h2 className="text-2xl md:text-3xl font-semibold mb-4 border-b pb-2">My Role</h2>
      <p className="text-gray-700 text-lg">{role}</p>
    </section>
  );
};

export default MyRoleSection;
