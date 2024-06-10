const DashboardWrapper = ({
  TopComponents,
  MiddleComponent,
  BottomComponent,
}) => {
  return (
    <div className="xs:px-8 px-2">
      {TopComponents}
      <div className="w-full mt-5">
        <div className="xl:col-span-6 w-full">
          {MiddleComponent}
          {BottomComponent && (
            <div className="mt-6 ">
              {BottomComponent}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardWrapper;
