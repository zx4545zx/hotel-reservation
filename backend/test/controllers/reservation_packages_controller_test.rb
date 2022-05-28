require "test_helper"

class ReservationPackagesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @reservation_package = reservation_packages(:one)
  end

  test "should get index" do
    get reservation_packages_url, as: :json
    assert_response :success
  end

  test "should create reservation_package" do
    assert_difference("ReservationPackage.count") do
      post reservation_packages_url, params: { reservation_package: { package_id: @reservation_package.package_id, reservation_id: @reservation_package.reservation_id } }, as: :json
    end

    assert_response :created
  end

  test "should show reservation_package" do
    get reservation_package_url(@reservation_package), as: :json
    assert_response :success
  end

  test "should update reservation_package" do
    patch reservation_package_url(@reservation_package), params: { reservation_package: { package_id: @reservation_package.package_id, reservation_id: @reservation_package.reservation_id } }, as: :json
    assert_response :success
  end

  test "should destroy reservation_package" do
    assert_difference("ReservationPackage.count", -1) do
      delete reservation_package_url(@reservation_package), as: :json
    end

    assert_response :no_content
  end
end
